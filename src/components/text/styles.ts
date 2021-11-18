import styled from 'styled-components/native';

interface TextProps {
  fontSize: number;
}

export const Text = styled.Text<TextProps>`
  font-size: ${({ fontSize }) => fontSize}px;
`;
