import React from 'react';
import type { TextProps } from 'react-native';

import * as S from './styles';

interface NewTextProps {
  fontSize?: number;
}

const NewText: React.FC<NewTextProps & TextProps> = ({
  fontSize = 16,
  children,
  ...rest
}) => {
  return (
    <S.Text {...rest} fontSize={fontSize}>
      {children}
    </S.Text>
  );
};

export default NewText;
