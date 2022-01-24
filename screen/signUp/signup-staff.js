import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";
import AppBar from "../../component/appBar";
import { Button } from "react-native-elements";

const title = "Sign Up-Staff";

const SignupStaff = () => {
  return (
    <View>
      <AppBar title={title} />
      <Input placeholder="Enter Your Name" />

      <Input placeholder="Enter Your Email" />

      <Input placeholder="Create Your Password" secureTextEntry={true} />
      <Input placeholder="Re Enter Your Password" secureTextEntry={true} />

      <Button title="Sign Up" />
    </View>
  );
};

export default SignupStaff;
