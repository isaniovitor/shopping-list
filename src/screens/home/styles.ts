import styled from 'styled-components/native';

// Containers
export const Container = styled.View`
  flex: 1;
`;

export const ImputContainer = styled.View`
  background-color: white;
`;

export const ListContainer = styled.View``;

export const ResumeContainer = styled.View`
  background-color: #4299e1;
  position: absolute;
  bottom: 0;

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
  background-color: yellow;
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
