import React from "react";
import { View } from "react-native";
import { Input, Text } from "@rneui/themed";
import { FontAwesome5, FontAwesome6, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { establishmentStyles } from "./EstablishmentUpdateStyles";
import { FontAwesome } from "@expo/vector-icons";
import CustomButton from "../../components/button";
import Button2 from "../../components/button";



const EstablishmentUpdateForm = () =>{
    return(
        <View style={{width: "85%", flexDirection: "column"}}>
            <Text style={establishmentStyles.text}>Atualização de Estabelecimento</Text>
            <View style={establishmentStyles.containerUpdateForm}>
            <FontAwesome
                name="user"
                size={34}
                color={"white"}
              style={establishmentStyles.icon}
            />
            <Input
                containerStyle={{ width: "90%", marginLeft: 3.5 }}
                style={{ color: "white" }}
                placeholder={"Nome Fantasia"}
                errorStyle={{ color: "red", marginLeft: -1 }}
        />
 </View>
 <View style={establishmentStyles.containerUpdateForm}>
            <FontAwesome
                name="envelope"
                size={28}
                color={"white"}
              style={establishmentStyles.icon}
            />
            <Input
                containerStyle={{ width: "90%" }}
                style={{ color: "white" }}
                placeholder={"Email"}
                errorStyle={{ color: "red", marginLeft: -1 }}
        />
 </View>

 <View style={establishmentStyles.containerUpdateForm}>
            <FontAwesome6
                name="phone-volume"
                size={26}
                color={"white"}
              style={establishmentStyles.icon}
            />
            <Input
                containerStyle={{ width: "90%" }}
                style={{ color: "white" }}
                placeholder={"Telefone"}
                errorStyle={{ color: "red", marginLeft: -1 }}
        />
 </View>

 <View style={establishmentStyles.containerUpdateForm}>
            <Fontisto
                name="map-marker-alt"
                size={36}
                color={"white"}
              style={establishmentStyles.icon}
            />
            <Input
                containerStyle={{ width: "90%" }}
                style={{ color: "white" }}
                placeholder={"CEP"}
                errorStyle={{ color: "red", marginLeft: -1 }}
        />
 </View>

 <View style={establishmentStyles.containerUpdateForm}>
            <FontAwesome5
                name="city"
                size={26}
                color={"white"}
              style={establishmentStyles.icon}
            />
            <Input
                containerStyle={{ width: "90%", marginLeft: -5}}
                style={{ color: "white", marginLeft:-1 }}
                placeholder={"Estado"}
                errorStyle={{ color: "red", marginLeft: -1 }}
        />
 </View>

 <View style={establishmentStyles.containerUpdateForm}>
            <MaterialCommunityIcons
                name="calendar-month"
                size={36}
                color={"white"}
              style={establishmentStyles.iconCity}
            />
            <Input
                containerStyle={{ width: "90%", marginLeft:-9}}
                style={{ color: "white", marginLeft:-1 }}
                placeholder={"Cidade"}
                errorStyle={{ color: "red", marginLeft: -1 }}
        />
 </View>

 <View style={establishmentStyles.containerUpdateForm}>
            <FontAwesome6
                name="tree-city"
                size={32}
                color={"white"}
              style={establishmentStyles.iconBairro}
            />
            <Input
                containerStyle={{ width: "90%", marginLeft:-9}}
                style={{ color: "white", marginLeft:-1 }}
                placeholder={"Bairro"}
                errorStyle={{ color: "red", marginLeft: -1 }}
        />
 </View>

 <View style={establishmentStyles.containerUpdateForm}>
            <FontAwesome
                name="road"
                size={34}
                color={"white"}
              style={establishmentStyles.iconCity}
            />
            <Input
                containerStyle={{ width: "90%", marginLeft:-9}}
                style={{ color: "white", marginLeft:-1 }}
                placeholder={"Rua"}
                errorStyle={{ color: "red", marginLeft: -1 }}
        />
 </View>


 <View style={establishmentStyles.containerUpdateForm}>
            <MaterialCommunityIcons
                name="pound"
                size={34}
                color={"white"}
              style={establishmentStyles.iconCity}
            />
            <Input
                containerStyle={{ width: "90%", marginLeft:-9}}
                style={{ color: "white", marginLeft:-1 }}
                placeholder={"Número"}
                errorStyle={{ color: "red", marginLeft: -1 }}
        />
 </View>
 <CustomButton title="Atualizar" />

        </View>

         
    );
};

export default EstablishmentUpdateForm;