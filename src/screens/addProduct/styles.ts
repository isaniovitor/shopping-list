import { StyleSheet } from 'react-native';
import styled from 'styled-components';

// conteinrs
export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: white;
`;

export const ImageContainer = styled.View`
  justify-content: center;
  flex: 0.25;
`;

export const InputContainer = styled.View`
  flex: 0.7;
  align-items: center;
`;

export const RowInputContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const AddCategoryContainer = styled.View`
  width: 100%;

  flex: 1;
  align-items: center;
  flex-direction: row;

`;

export const ButtonContainer = styled.View`
  flex: 0.2;
  margin-top: 20px;
`;

// FAB
export const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#4299e1',
    marginLeft: 80,
  },
  imagefab: {
    backgroundColor: '#4299e1',
    width: 100,
    height: 100,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
