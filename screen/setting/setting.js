import React from "react";
import { View, Text,StyleSheet } from "react-native";
import AppBar from "../../component/appBar";
import SettingIcon from "react-native-vector-icons/Ionicons";

const title = "Home";

const Setting = () => {
  return (
    <View>
      <AppBar title={title} />
      <View style={styles.settingView}>
        <View>
          <SettingIcon name="settings" size={50} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    settingView:{
            alignItems: "center",
            marginTop:40,
    }
})

export default Setting;
