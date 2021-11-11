import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { HOME_SCREEN } from '~/constants/routes';

import groceries from '../../assets/groceries.png';

import * as sty from './styles';

const Login: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUsePassword] = useState('');

  const navigation = useNavigation();

  function handleLogin() {
    navigation.navigate(HOME_SCREEN, { userName });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={{ flex: 1 }}
    >
      <sty.Container>
        <sty.LoginImage source={groceries} />

        <sty.ContainerImput>
          <sty.LoginInput
            onChangeText={setUserName}
            value={userName}
            placeholder="Digite seu email"
          />
          <sty.LoginInput
            onChangeText={setUsePassword}
            value={userPassword}
            placeholder="Digite seu senha"
          />
        </sty.ContainerImput>

        <sty.LoginButton onPress={handleLogin} accessibilityLabel="fazer login">
          <sty.TextButton>Entrar</sty.TextButton>
        </sty.LoginButton>
      </sty.Container>
    </KeyboardAvoidingView>
  );
};

export default Login;
