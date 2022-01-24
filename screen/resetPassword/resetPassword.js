import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Text as TextEl } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";
import AppBar from "../../component/appBar";
import { Button } from "react-native-elements";
// import { text, body } from "dom-helpers";

const title = "Reset Password";

const ResetPassword = () => {
  return (
    <View>
      <AppBar title={title} />
      

      <View style={styles.body}>
        <Text style={styles.text}>Check Your Email</Text>
        <Text style={styles.text1}>We just sent you an email with a link to  </Text>
        <Text style={styles.text2}>reset your password </Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    body: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 150,
    fontSize: 25,
    color: "blue",
  },
  text1: {
    marginTop: 50,
    fontSize: 18,
    color: "black",
  },
  text2: {
    marginTop: 10,
    fontSize: 18,
    color: "black",
  },
});

export default ResetPassword;
