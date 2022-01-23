import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";
import AppBar from "../../component/appBar";
import { Button } from "react-native-elements";

import React from "react";

const title = "Sign In";

const Signin = () => {
  return (
    <View>
      <AppBar title={title} />

      <Input placeholder="Enter Your Email" />

      <Input placeholder="Password" secureTextEntry={true} />
      <Button title="Sign In" />
    </View>
  );
};

export default Signin;
