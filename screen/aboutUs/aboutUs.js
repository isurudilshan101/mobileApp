import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppBar from "../../component/appBar";
import AboutIcon from "react-native-vector-icons/FontAwesome5";

const title = "About Us";

const AboutUs = () => {
  return (
    <View>
      <View>
        <AppBar title={title} />
      </View>

      <View style={styles.content1}>
        <AboutIcon name="user" size={80} style={styles.aboutIcon} />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a diam ac
          est vehicula aliquet eget condimentum metus. Suspendisse potenti.
          Praesent blandit blandit pretium. Vivamus eget mauris semper, suscipit
          metus sed, vehicula felis. Ut congue bibendum massa, in eleifend velit
          posuere vel. Fusce ipsum dui, iaculis ut laoreet eget, aliquet at
          dolor. Nullam tempus lacus vel mattis egestas. Sed malesuada, justo
          quis pharetra bibendum, turpis dui lobortis ligula, et luctus tortor
          ligula at dui. Nulla tincidunt, ex sit amet faucibus feugiat, eros
          risus egestas sem, nec egestas mauris lacus sed magna. Ut venenatis
          leo in scelerisque dapibus. Fusce sed enim orci. Etiam ante lectus,
          convallis ut lacinia ut, sodales vel elit.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content1: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
    fontSize: 16,
    color: "black",
  },

  aboutIcon: {
    paddingTop: 55,
  },
});

export default AboutUs;
