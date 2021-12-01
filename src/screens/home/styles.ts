import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

// Containers
export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const ImputContainer = styled.View`
  background-color: white;
`;

export const ListContainer = styled.View`
  margin-bottom: 150px;
`;

// Imput
export const SearchImput = styled.TextInput`
  padding-left: 72px;

  border: 8px;
  border-color: #c0ccda;

  height: 66px;
`;

// List
export const HeaderList = styled.Text`
  padding-left: 7px;
  padding-top: 12px;

  font-size: 20px;

  color: #a0aec0;
`;

// Item
export const ItemListConteiner = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: beige;

  /* justify-content: space-between; */
  padding-left: 10px;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  display: flex;
  background-color: salmon;
  flex-direction: row;
  align-items: center;
`;

export const ImageItem = styled.Image`
  width: 43px;
  height: 43px;
`;

export const ResumeItemContainer = styled.View`
  flex: 0.9;
  padding: 12px 0;
  margin-left: 5px;
`;

export const NameItem = styled.Text`
  font-size: 16px;
  /* font-weight: 700; */
`;

export const PriceItem = styled.Text`
  font-size: 14px;
  color: #8492a6;
`;

// FAB
export const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    backgroundColor: '#4299e1',
    margin: 22,
    right: 0,
    bottom: 90,
  },
});
