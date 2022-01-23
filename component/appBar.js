import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Platform } from 'react-native';


const AppBar = (props) => (
   
  <Appbar.Header style = {styles.item}>
     <Appbar.Content title={props.title} />
      {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
  </Appbar.Header>
);

export default AppBar;

const styles = StyleSheet.create ({
   item: {
      backgroundColor : "#ADD8E6"
     
   }
})