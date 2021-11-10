import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import * as sty from './styles';

const Login: React.FC = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <sty.Container>
        <sty.LoginImage source={require('../../../assets/groceries.png')} />

        <sty.ContainerImput>
          <sty.LoginInput
            // onChangeText={}
            // value={}
            placeholder="Digite seu email"
          />
          <sty.LoginInput
            // onChangeText={}
            // value={}
            placeholder="Digite seu senha"
          />
        </sty.ContainerImput>

        <sty.LoginButton
          onPress={() => console.log('entrou')}
          accessibilityLabel="fazer login"
        >
          <sty.TextButton>Entrar</sty.TextButton>
        </sty.LoginButton>
      </sty.Container>
    </KeyboardAvoidingView>
  );
};

export default Login;
