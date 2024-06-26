import React, { useState } from 'react'
import { ImageBackground, KeyboardAvoidingView, SafeAreaView, Text, View, Platform, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native'
import { VehicleRegistrationStyles  as styles } from "./VehicleRegistrationStyles";
import CustomButton from '../../components/button';
import ControlledTextInput from '../../components/controller/ControlledTextInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import { vehicleSchema } from '../../utils/yupSchemas';
import vehicleService, { vehicleDTO } from '../../services/VehicleService';
import {useNavigation} from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type VehicleForm = {
  placa: string,
  anoDeFabricação: number,
  modelo: string,
  quilometragemAtual: string
}



function VehicleRegistration() {

  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  const [isMakingRequest, setIsMakingRequest] = useState(false)

  const {control, handleSubmit, formState: { errors } } = useForm<VehicleForm>({
    mode: 'onChange',
    resolver: yupResolver(vehicleSchema)
  })

  const handleCreateVehicle = async (e : VehicleForm ) => {
    const data: vehicleDTO = {
      kilometers: parseInt(e.quilometragemAtual),
      model: e.modelo,
      plate: e.placa,
      year: e.anoDeFabricação,
      id: 0
    } 

    setIsMakingRequest(true)
    const response = await vehicleService.createVehicle(data)
    setIsMakingRequest(false)
    navigation.navigate('VehicleList', {registerVehicleCode: response.data.statusCode} )
  }

  return (
    <ImageBackground
        source={require("../../../assets/splashScreen.png")}
        style={styles.backgroundImage}
        >
        {
          isMakingRequest &&
           <View style={
            {height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(128, 128, 128, 0.9)", position: "absolute", zIndex: 100 }}>
              <View style={{height: 80, width: 80,  display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white", borderRadius: 10}}>
                <ActivityIndicator size={'large'} color={"blue"}></ActivityIndicator>
              </View>
           </View>
        }
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback accessible={false} touchSoundDisabled onPress={() => Keyboard.dismiss()} >
          <SafeAreaView style={styles.container}>
            <View style={styles.Header}>
              <Text style={styles.headerText}>Cadastro</Text>
              <Text style={styles.headerText}>de Veículo</Text>
            </View>
            <View style={styles.registerForm}>
            
              <ControlledTextInput
                control={control}
                name="placa"
                rules={{required: "placa obrigatória"}}
                placeholder="Placa"
                style={{ color: "white" }}
                iconName='user'
                maxLength={7}
                containerStyle={{ width: "92%", marginLeft: 10, transform: "uppercase" }}
              >

              </ControlledTextInput>
              <ControlledTextInput
                control={control}
                name="anoDeFabricação"
                rules={{required: "Ano de Fabricação obrigatório"}}
                placeholder="Ano de Fabricação"
                style={{ color: "white" }}
                iconName='calendar'
                containerStyle={{ width: "92%", marginLeft: 5 }}
                type='number'
                maxLength={4}
              >

              </ControlledTextInput>
              <ControlledTextInput
                control={control}
                name="modelo"
                rules={{required: "modelo obrigatório"}}
                placeholder="Modelo"
                style={{ color: "white" }}
                iconName='car'
                containerStyle={{ width: "92%" }}
              >

              </ControlledTextInput>

              <ControlledTextInput
                control={control}
                name="quilometragemAtual"
                rules={{required: "Quilometragem Atual obrigatório"}}
                placeholder="Quilometragem Atual"
                style={{ color: "white" }}
                type='number'
                iconName='speedometer'
                containerStyle={{ width: "92%" }}
              >

              </ControlledTextInput>

              <CustomButton title="Cadastrar" onPress={handleSubmit((e) => handleCreateVehicle(e))}></CustomButton>
              <Text
                style={styles.textButton}
                onPress={() => navigation.goBack()}
              >
                Cancelar
            </Text>
            </View>
          </SafeAreaView>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      </ImageBackground>
  )
}

export default VehicleRegistration