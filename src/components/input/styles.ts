import { vs } from 'react-native-size-matters';
import styled from 'styled-components/native';

import Icon from '~/components/icon';
import Text from '~/components/text';

interface InputWrapperProps {
  // type: string;
  width: number;
}

interface IconInputProps {
  name: string;
  iconType?: string;
  iconColor?: string;
}

interface ContainerProps {
  labelSameLine?: boolean;
  type: string;
  // width: number;
}

interface ContainerInputProps {
  error: string;
  labelSameLine?: boolean;
}

interface TextInputProps {
  // margin: boolean;
  iconRight?: string;
}

export const InputWrapper = styled.View<InputWrapperProps>`
  background-color: ${({ theme }) => theme.Colors.WHITE};
  width: ${({ width }) => width}%;
  border-radius: 15px;
  margin-bottom: 10px;
`;

export const ContainerInputIcon = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Touchable = styled.TouchableOpacity``;

export const Label = styled(Text).attrs(({ theme }) => ({
  fontSize: theme.Sizes.FONTSIZE_INPUT_LABEL,
}))`
  color: ${({ theme }) => theme.Colors.FONT_INPUT};
`;

export const ContainerInput = styled.View<ContainerInputProps & ContainerProps>`
  flex-direction: row;
  border-color: ${({ theme, error }) =>
    error ? theme.Colors.ERROR : theme.Colors.FONT_INPUT};
  background-color: ${({ theme }) => theme.Colors.WHITE};
  margin-top: ${({ labelSameLine }) => (labelSameLine ? 0 : 10)}px;
  margin-left: ${({ labelSameLine }) => (labelSameLine ? 15 : 0)}px;
  width: ${({ labelSameLine }) => (labelSameLine ? '65%' : '100%')};
  /* border-radius: 15px; */
  border-bottom-width: ${({ type }) => (type === 'inputlogin' ? 0 : 2)}px;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.View<ContainerProps>`
  width: ${({ type }) => (type === 'dropdwon' || type === 'input' ? 98 : 90)}%;
  flex-direction: ${({ labelSameLine }) => (labelSameLine ? 'row' : 'column')};
  align-items: ${({ labelSameLine }) =>
    labelSameLine ? 'center' : 'flex-start'};
  justify-content: center;
`;

export const Input = styled.TextInput.attrs<TextInputProps>(({ theme }) => ({
  placeholderTextColor: theme.Colors.TEXT_CLICKABLE,
}))<TextInputProps>`
  width: ${({ iconRight }) => (iconRight ? 90 : 100)}%;
  font-size: ${({ theme }) => theme.Sizes.FONTSIZE_INPUT}px;
  margin-bottom: ${vs(10)}px;
  margin-left: 0px;
  color: ${({ theme }) => theme.Colors.TEXT_NO_CLICKABLE};
`;

export const ErrorMessage = styled(Text)`
  color: ${({ theme }) => theme.Colors.ERROR};
  margin-top: 15px;
  margin-left: 30px;
`;

export const IconInput = styled(Icon).attrs<IconInputProps>(
  ({ theme, name, iconType }) => ({
    name,
    size: theme.Sizes.ICON_SIZE,
    type: iconType,
  }),
)<IconInputProps>`
  color: ${({ iconColor, theme }) =>
    iconColor || theme.Colors.ICON_COLOR_CLICKABLE};
  padding: 1px;
`;
