import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import SplashScreen from "../screens/SplashScreen";
import VehicleRegistration from "../screens/VehicleRegistration";
const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen  name="VehicleRegistration" component={VehicleRegistration}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;