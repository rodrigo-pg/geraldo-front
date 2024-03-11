import React from 'react'
import { ImageBackground, KeyboardAvoidingView, SafeAreaView, Text, View, Platform } from 'react-native'
import { VehicleRegistrationStyles  as styles } from "./VehicleRegistrationStyles";
import CustomButton from '../../components/button';
import ControlledTextInput from '../../components/controller/ControlledTextInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

type VehicleForm = {
  placa: string,
  anoDeFabricação: string,
  modelo: string,
  quilometragemAtual: number
}

const formSchema = yup.object({
  placa: yup.string()
    .required('Por favor, informe a placa do veículo.')
    .matches(/^([A-Z]{3}\d{4})$/, 'Por favor, informe uma placa válida no formato AAA1234.'),
  anoDeFabricação: yup.string()
    .required('Por favor, informe o ano de fabricação do veículo.')
    .matches(/^(19|20)\d{2}$/, 'Por favor, informe um ano de fabricação válido. Exemplo: 2011'),
  modelo: yup.string().required('Por favor, informe o modelo do veículo.'),
  quilometragemAtual: yup.number()
    .required('Por favor, informe a quilometragem atual do veículo.')
    .typeError('Por favor, informe a quilometragem atual do veículo.')
    .min(0, 'A quilometragem atual não pode ser menor que 0.')
});


function VehicleRegistration() {

  const {control, handleSubmit, formState: { errors } } = useForm<VehicleForm>({
    defaultValues: {
      placa: "",
      anoDeFabricação: "",
      modelo: "",
      quilometragemAtual: -1
    },
    mode: 'onChange',
    resolver: yupResolver(formSchema)
  })

  return (
    <ImageBackground
      source={require("../../../assets/splashScreen.png")}
      style={styles.backgroundImage}
    >
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
              containerStyle={{ width: "95%" }}
            >

            </ControlledTextInput>
            <ControlledTextInput
              control={control}
              name="anoDeFabricação"
              rules={{required: "Ano de Fabricação obrigatório"}}
              placeholder="Ano de Fabricação"
              style={{ color: "white" }}
              iconName='calendar'
              containerStyle={{ width: "94%" }}
              type='number'
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
              iconName='car'
              containerStyle={{ width: "92%" }}
            >

            </ControlledTextInput>

            <CustomButton title="Cadastrar" onPress={handleSubmit((e) => console.log(e))}></CustomButton>
          </View>
        </SafeAreaView>
    </KeyboardAvoidingView>
    </ImageBackground>
  )
}

export default VehicleRegistration