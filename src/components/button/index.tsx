import { useNavigation } from '@react-navigation/core';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { View } from 'react-native';

import * as Sty from './styles';
import { HOME_SCREEN } from '~/constants/routes';

interface ButtonProps {
  label: string;
  color: string;
  actionBtn: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  color,
  actionBtn,
  ...rest
}) => {

  return (
    <Sty.LoginButton color={color}
      onPress={actionBtn}
      //accessibilityLabel="fazer login"
    >
      <Sty.TextButton color={color}>{label}</Sty.TextButton>
    </Sty.LoginButton>
  );
};

export default Button;
