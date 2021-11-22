import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #4299e1;
`;

export const LoginImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ContainerImput = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 71px 0 81px 0;
`;

export const LoginInput = styled.TextInput`
  width: 317px;
  height: 53px;

  background: white;
  color: #47525e;

  font-size: 16px;
  font-weight: 700;

  margin: 11px;
  padding: 0 58px;
  border-radius: 15px;
`;
