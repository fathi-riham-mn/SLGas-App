import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';

import FirstScreen from './src/FirstPage'
import MainScreen from './src/Main'
import LoginScreen from './src/Login'
import RegisterScreen from './src/Register'
import ForgotPassScreen from "./src/ForgotPass"
import TypesScreen from "./src/Types"
import LitroScreen from "./src/Litro"
import LaugfsScreen from "./src/Laugfs"
import CheckAvailability from "./src/CheckAvailability"

const Drawer = createDrawerNavigator();

const Gas = () => {
  return (
      <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="FirstPage" component={FirstScreen} options={{ headerShown:false ,drawerItemStyle: { display: 'none' }}}/>
            <Drawer.Screen name="Login" component={LoginScreen} options={{ headerShown:false , drawerItemStyle: { display: 'none' }}}/>
            <Drawer.Screen name="Register" component={RegisterScreen} options={{ headerShown:false, drawerItemStyle: { display: 'none' }}}/>
            <Drawer.Screen name="ForgotPass" component={ForgotPassScreen} options={{ headerShown:false,drawerItemStyle: { display: 'none' }}} />
            <Drawer.Screen name="Main" component={MainScreen} />
            <Drawer.Screen name="Types" component={TypesScreen} options={{title:"Types of Gas"}}/>
            <Drawer.Screen name="Litro" component={LitroScreen} options={{title:"Litro"}}/>
            <Drawer.Screen name="Laugfs" component={LaugfsScreen} options={{title:"Laugfs"}}/>
            <Drawer.Screen name="CheckAvailability" component={CheckAvailability} options={{title:"CheckAvailability"}}/>
        </Drawer.Navigator>
      </NavigationContainer>
  );
};

export default Gas
