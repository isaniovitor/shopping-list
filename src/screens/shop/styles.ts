import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Icon from '~/components/icon';

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

export const ResumeContainer = styled.View`
  background-color: #4299e1;
  position: absolute;
  bottom: 0;

  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0 17px;
  width: 100%;
  height: 80px;
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

  /* justify-content: space-between; */
  padding-left: 15px;
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

// Resume
export const IconList = styled(Icon).attrs(() => ({
  name: 'clipboard-list',
  size: 50,
  color: 'white',
  type: 'font-5',
}))``;

export const ResumeText = styled.Text`
  font-size: 18px;
  color: white;
`;

export const LeftResume = styled.View`
  flex: 0.9;
  margin-left: 7px;
`;

export const RightResume = styled.View`
  flex: 0.25;
  align-items: center;
`;
