import React from "react";
import EmailIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { Input, Text as TextEl } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";
import AppBar from "../../component/appBar";
import { Button } from "react-native-elements";

// import { text, body } from "dom-helpers";

const title = "Reset Password";

const ResetPassword = () => {
  return (
    <View>
      <View>
        <AppBar title={title} />
      </View>

      <View style={styles.body}>
        <View>
          <EmailIcon name="email" size={80} style={styles.emailIcon}/>
        </View>
        <Text style={styles.text}>Check Your Email</Text>
        <Text style={styles.text1}>
          We just sent you an email with a link to{" "}
        </Text>
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
    marginTop: 40,
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
  emailIcon:{
        paddingTop:55,
  }
});

export default ResetPassword;
