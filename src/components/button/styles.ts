import styled from 'styled-components/native';

interface TextProps {
  color: string;
}

export const LoginButton = styled.TouchableOpacity<TextProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 53px;

  background: ${({ color }) => (color === '#4299e1' ? 'white' : '#4299e1')};

  font-size: 20px;

  margin: 0 auto;
  border-radius: 15px;

  /* Text {
    color: #4299e1;
  } */
`;

export const TextButton = styled.Text<TextProps>`
  font-size: 18px;
  color: ${({ color }) => color};
`;
