import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { HOME_SCREEN, LOGIN_SCREEN } from '~/constants/routes';
import Home from '~/screens/home';
import Login from '~/screens/login';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={LOGIN_SCREEN}
        screenOptions={{ gestureEnabled: false, animation: 'fade' }}
      >
        <Stack.Screen
          name={LOGIN_SCREEN}
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={HOME_SCREEN}
          component={Home}
          // options={({ route }) => ({ title: route.params. })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
