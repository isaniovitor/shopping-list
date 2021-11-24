import React, { useContext } from 'react';
import type { TextInputProps } from 'react-native';
import { ThemeContext } from 'styled-components';

import { sfs } from '~/utils/responsibleText';

import DropDwon from '../dropDwon';
import { Text } from '../text/styles';

import * as S from './styles';

interface InputProps {
  label?: string;
  type?: string;
  width: number;
  dropwidth?: number;
  title?: string;
  iconRight?: string;
  iconLeft?: string;
  iconType?: string;
  error?: any;
  labelSameLine?: boolean;
  actionIcon?: () => void;
}

const Input: React.FC<TextInputProps & InputProps> = ({
  label,
  width,
  dropwidth,
  type,
  title,
  iconRight,
  iconLeft,
  labelSameLine,
  error,
  iconType,
  actionIcon,
  ...rest
}) => {
  const { Colors } = useContext(ThemeContext);

  return (
    <S.InputWrapper width={width}>
      {title && <Text fontSize={sfs(16)}>{title}</Text>}
      <S.ContainerInputIcon>
        {iconLeft && (
          <S.IconInput
            iconType={iconType}
            iconColor={Colors.ICON_NO_CLICKABLE}
            name={iconLeft}
          />
        )}
        {type && <DropDwon label={title} dropWidth={dropwidth} />}
        {!type && (
          <S.Container labelSameLine={labelSameLine}>
            {label && <S.Label fontSize={sfs(9)}>{label}</S.Label>}
            <S.ContainerInput error={error} labelSameLine={labelSameLine}>
              <S.Input {...rest} autoCapitalize="none" iconRight={iconRight} />
              {iconRight && (
                <S.Touchable onPress={() => actionIcon && actionIcon()}>
                  <S.IconInput name={iconRight} />
                </S.Touchable>
              )}
            </S.ContainerInput>
          </S.Container>
        )}
      </S.ContainerInputIcon>
      {error && <S.ErrorMessage fontSize={sfs(12)}>{error}</S.ErrorMessage>}
    </S.InputWrapper>
  );
};

export default Input;
