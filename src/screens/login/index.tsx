import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useDispatch } from 'react-redux';

import Button from '~/components/button';
import Input from '~/components/input';

import { loginAction } from '~/store/ducks/user/actions';

import groceries from '../../assets/groceries.png';

import * as sty from './styles';

const Login: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUsePassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  function handleLogin() {
    dispatch(loginAction(userName, userPassword));
    // tirou navegati
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
          <Input
            iconLeft="person"
            iconType="ionicons"
            placeholder="Digite seu username"
            value={userName}
            onChangeText={setUserName}
            width={90}
            type="inputlogin"
          />

          <Input
            iconLeft="lock"
            placeholder="Digite sua senha"
            value={userPassword}
            onChangeText={setUsePassword}
            secureTextEntry={!showPassword}
            actionIcon={() => setShowPassword(!showPassword)}
            iconRight={showPassword ? 'eye-off' : 'eye'}
            width={90}
            type="inputlogin"
          />
        </sty.ContainerImput>
        <Button color="#4299e1" label="Entrar" actionBtn={handleLogin} />
      </sty.Container>
    </KeyboardAvoidingView>
  );
};

export default Login;
