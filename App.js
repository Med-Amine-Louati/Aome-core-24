import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import OnboardingScreen from './src/Screens/Onboarding';
import LoginScreen from './src/Authentification/Login';
import RegisterScreen from './src/Authentification/Register';
import Map from './src/Map/Map'
import { NativeRouter, Route, Link,Switch } from "react-router-native";
import {View, StyleSheet } from 'react-native';
const AppStack = createStackNavigator();
const App =()=>{
  return (
    <NativeRouter>
      <View style={styles.container}>
           
        <Switch>
          <Route exact path="/" component = {OnboardingScreen}/>
          <Route exact path="/login" component = {LoginScreen}/>
          <Route exact path="/signup" component = {RegisterScreen}/>
          <Route exact path="/map" component = {Map}/>
        </Switch>
      </View>
    </NativeRouter>

  )
  
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  }
})
export default  App;

