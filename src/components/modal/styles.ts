import styled from 'styled-components/native';

interface ButtonProps {
  color?: string;
}

export const Container = styled.View`
  /* flex: 1; */
  flex-direction: row;
  border-radius: 6px;
  padding: 5px;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  flex: 0.5;
  padding: 20px;
  align-items: center;
  border-radius: 5px;
  background: ${({ color }) => color};
`;

export const TextButton = styled.Text<ButtonProps>`
  color: ${({ color }) => (color === 'white' ? 'black' : 'white')};
  font-size: 16px;
`;

export const Title = styled.Text`
  margin: 0 auto;
  font-size: 20px;
  padding: 10px;
  /* background-color: aqua; */
`;

export const containerModal = {
  backgroundColor: 'white',
  margin: 40,
  borderRadius: 6,
};
