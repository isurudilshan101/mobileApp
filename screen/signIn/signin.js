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

      {/* <Input
  placeholder='INPUT WITH ICON'
  leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
/> */}

      {/* <Input
  placeholder='INPUT WITH CUSTOM ICON'
  leftIcon={
    <Icon
      name='user'
      size={24}
      color='black'
    />
  }
/> */}

      {/* 
 <Input
   placeholder="Comment"
   leftIcon={{ type: 'font-awesome', name: 'comment' }}
   
   onChangeText={value => this.setState({ comment: value })}
  /> */}

      {/* 
<Input
  placeholder='INPUT WITH ERROR MESSAGE'
  errorStyle={{ color: 'red' }}
  errorMessage='ENTER A VALID ERROR HERE'
/> */}

      <Input placeholder="Password" secureTextEntry={false} />
      <Button title="Sign In" />
    </View>
  );
};

export default Signin;
