import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppBar from "./component/appBar.js";
// import Signin from './screen/signIn/signin';
//import SignupStudent from "./screen/signUp/signup-student";
//import SignupStaff from "./screen/signUp/signup-staff";
//import ResetPassword from "./screen/resetPassword/resetPassword.js";
//import AboutUs from "./screen/aboutUs/aboutUs";
import Setting from "./screen/setting/setting";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />

      {/* <Signin/> */}
      {/* <SignupStudent /> */}
        {/* <SignupStaff/> */}
        {/* <ResetPassword/> */}
        {/* <AboutUs/> */}
        <Setting/>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
