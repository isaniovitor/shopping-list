import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import type { AplicationState } from '~/@types/entities/AplicationState';
import {
  ADDCATEGORY_SCREEN,
  ADDPRODUCT_SCREEN,
  HOME_SCREEN,
  LOGIN_SCREEN,
  SHOP_SCREEN,
} from '~/constants/routes';
import AddCategory from '~/screens/addCategory';
// import AddCategory from '~/screens/addCategory';
import AddProduct from '~/screens/addProduct';
import Home from '~/screens/home';
import Login from '~/screens/login';
import Shop from '~/screens/shop';
import Theme from '~/themes';

import { Header } from '../components/header';

const Stack = createNativeStackNavigator();
const StackLogin = createNativeStackNavigator();

function RootStack() {
  const { islogged } = useSelector((state: AplicationState) => state.user);

  return (
    <ThemeProvider theme={Theme.light}>
      <NavigationContainer>
        {islogged ? (
          <Stack.Navigator
            initialRouteName={HOME_SCREEN}
            screenOptions={{ gestureEnabled: false, animation: 'fade' }}
          >
            <Stack.Screen
              name={HOME_SCREEN}
              component={Home}
              options={{
                header: props => <Header {...props} />,
              }}
            />
            <Stack.Screen
              name={ADDPRODUCT_SCREEN}
              component={AddProduct}
              options={{
                header: props => <Header enableNavigation {...props} />,
              }}
            />
            <Stack.Screen
              name={ADDCATEGORY_SCREEN}
              component={AddCategory}
              options={{
                header: props => <Header enableNavigation {...props} />,
              }}
            />
            <Stack.Screen
              name={SHOP_SCREEN}
              component={Shop}
              options={{
                header: props => <Header enableNavigation {...props} />,
              }}
            />
          </Stack.Navigator>
        ) : (
          <StackLogin.Navigator
            initialRouteName={LOGIN_SCREEN}
            screenOptions={{ gestureEnabled: false, animation: 'fade' }}
          >
            <StackLogin.Screen
              name={LOGIN_SCREEN}
              component={Login}
              options={{ headerShown: false }}
            />
          </StackLogin.Navigator>
        )}
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default RootStack;
