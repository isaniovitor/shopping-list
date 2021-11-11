import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Checkbox } from 'react-native-paper';

import groceries from '../../../assets/groceries.png';
import * as Sty from '../styles';

function renderProduct({ item }: any) {
  // const [isSelected, setIsSelected] = useState(false);

  return (
    <Sty.ItemListConteiner>
      <Sty.ImageItem source={groceries} />
      <Sty.ResumeItemContainer>
        <Sty.NameItem>{item.name}</Sty.NameItem>
        <Sty.PriceItem>{item.preco} R$</Sty.PriceItem>
      </Sty.ResumeItemContainer>
      {/* <Text>{item.preco}</Text> */}
      <Checkbox status={item.add ? 'checked' : 'unchecked'} />
    </Sty.ItemListConteiner>
  );
}

export function renderCategory({ item }: any) {
  return (
    <View>
      <Sty.HeaderList>{item.name}</Sty.HeaderList>
      <FlatList
        style={{ paddingTop: 20 }}
        data={item.listItems}
        extraData={item.listItems}
        renderItem={renderProduct}
        keyExtractor={(itemCategory: any, index: any) => index}
      />
    </View>
  );
}
