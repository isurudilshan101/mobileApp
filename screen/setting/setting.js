import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import AppBar from "../../component/appBar";
import SettingIcon from "react-native-vector-icons/Ionicons";
// import { Button } from "@mui/material";

const title = "Setting";

const Setting = () => {
  return (
    <View>
      <View>
        <AppBar title={title} />
      </View>

      <View style={styles.settingView}>
        <SettingIcon name="settings" size={50} />
      </View>

      <View style={styles.shereButton}>
      <Button style={styles.buttonStyle} color={"blue"} title="Language" />
      <Button style={styles.buttonStyle} color={"blue"} title="Privecy Policy" />
      <Button style={styles.buttonStyle} color={"blue"} title="Feedback" />
      <Button style={styles.buttonStyle} color={"blue"} title="Share" />


      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  settingView: {
    alignItems: "center",
    marginTop: 40,
  },
  shereButton: {
      width:'50%',
      marginLeft: 90,
      marginTop:60,
  },

  buttonStyle:{
      
  }
});

export default Setting;
