import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  AppBar from './component/appBar.js';
import Signin from './screen/signIn/signin';



export default function App() {
  return (


    <View>

  
      
      {/* <Text>isuru Dilshan</Text>   */}
   

       <StatusBar style="auto" />

      
       <Signin/>
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
