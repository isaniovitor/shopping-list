import React from 'react';
import { FlatList, View } from 'react-native';
import { Checkbox } from 'react-native-paper';

import * as Sty from '../styles';

function pressCheck(_itemAdded: boolean) {
  console.log('mudou!');
  _itemAdded = !_itemAdded;
}

function renderProduct({ item }: any) {
  // const [isSelected, setIsSelected] = useState(false);

  if (item.add) {
    return (
      <Sty.ItemListConteiner>
        <Sty.ImageItem source={{ uri: item.image_url }} />
        <Sty.ResumeItemContainer>
          <Sty.NameItem>{item.name}</Sty.NameItem>
          <Sty.PriceItem>{item.preco} R$</Sty.PriceItem>
        </Sty.ResumeItemContainer>
        {/* <Text>{item.preco}</Text> */}
        <Checkbox
          status={item.add ? 'checked' : 'unchecked'}
          onPress={() => pressCheck(item.add)}
        />
      </Sty.ItemListConteiner>
    );
  }

  return null;
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
