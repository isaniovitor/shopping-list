import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import Button from '~/components/button';
import Input from '~/components/input';

import { HOME_SCREEN } from '~/constants/routes';

import groceries from '../../assets/groceries.png';

import * as sty from './styles';

const Login: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUsePassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  function handleLogin() {
    navigation.navigate(HOME_SCREEN);
    // navigation.setOptions({ title: 'Updated!' })};
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
          />
        </sty.ContainerImput>
        <Button color="#4299e1" label="Entrar" actionBtn={handleLogin} />
      </sty.Container>
    </KeyboardAvoidingView>
  );
};

export default Login;
