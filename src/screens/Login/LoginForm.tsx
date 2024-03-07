import React, { useState } from "react";
import { View, TouchableOpacity, Alert } from "react-native";
import auth from "@react-native-firebase/auth";
import { Input, Text } from "@rneui/themed";
import { FontAwesome } from "@expo/vector-icons";
import { loginStyles } from "./LoginStyles";
import CustomButton from "../../components/button";
import axios from "axios";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRequiredUsername, setIsRequiredUsername] = useState(false);
  const [isRequiredPassword, setIsRequiredPassword] = useState(false);

  const handleLoginPress = async () => {
    username.trim() === ""
      ? setIsRequiredUsername(true)
      : setIsRequiredUsername(false);
    password.trim() === ""
      ? setIsRequiredPassword(true)
      : setIsRequiredPassword(false);

    if (username.trim() !== "" && password.trim() !== "") {
      signIn();
      // try {
      //   const response = await axios.post("http://127.0.0.1:3000/login", {
      //     username,
      //     password,
      //   });
      //   console.log(response.data);
      // } catch (error) {
      //   if (error instanceof Error) {
      //     Alert.alert(
      //       "Erro ao fazer login",
      //       error.message,
      //       [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      //       { cancelable: false }
      //     );
      //   }
      // }
    }
  };

  function signIn() {
    auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        console.log("user is authenticated");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <View style={{ width: "85%" }}>
      <View style={loginStyles.containerLoginForm}>
        <FontAwesome
          name="user"
          size={24}
          color="white"
          style={loginStyles.icon}
        />
        <Input
          containerStyle={{ width: "90%" }}
          style={{ color: "white" }}
          placeholder="Usuário"
          onChangeText={(text) => setUsername(text)}
          value={username}
          errorMessage={isRequiredUsername ? "Campo obrigatório" : ""}
          errorStyle={{ color: isRequiredUsername ? "red" : "black" }}
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FontAwesome
          name="lock"
          size={24}
          color="white"
          style={loginStyles.icon}
        />
        <Input
          containerStyle={{ width: "90%" }}
          style={{ color: "white" }}
          secureTextEntry={!showPassword}
          placeholder="Senha"
          onChangeText={(text) => setPassword(text)}
          value={password}
          errorMessage={isRequiredPassword ? "Campo obrigatório" : ""}
          errorStyle={{ color: isRequiredPassword ? "red" : "black" }}
        />
        <TouchableOpacity
          style={{ position: "absolute", right: 10, top: 10 }}
          onPress={() => setShowPassword(!showPassword)}
        >
          <FontAwesome
            name={showPassword ? "eye" : "eye-slash"}
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <CustomButton
        title="Acessar"
        onPress={() => {
          handleLoginPress();
        }}
      />
      <View />
      <Text
        style={loginStyles.textButton}
        onPress={() => {
          handleLoginPress();
        }}
      >
        Esqueceu a sua senha?
      </Text>
      <Text style={loginStyles.textButton}>Cadastrar Motorista</Text>
      <Text style={loginStyles.textButton}>Cadastrar Estabelecimento</Text>
    </View>
  );
};

export default LoginForm;
