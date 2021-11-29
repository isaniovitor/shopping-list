import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import type { AplicationState } from '~/@types/entities/AplicationState';
import { addProductAction } from '~/store/ducks/product/actions';

import * as Sty from './styles';

const Shop: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { Colors } = useContext(ThemeContext);

  const { groceryList } = useSelector(
    (state: AplicationState) => state.product,
  );

  useEffect(() => {
    navigation.setOptions({
      iconType: 'ionicons',
      iconColor: Colors.WHITE,
      title: 'Carrinho',
    });
  }, [navigation, Colors]);

  function pressCheck(item) {
    const newList = groceryList;
    // console.log(newList.entries();
    newList.map(categoty => {
      if (categoty.name === item.category) {
        categoty.listItems.map(product => {
          if (product === item) product.isAdded = !product.isAdded;
          return null;
        });
      }
      return null;
    });

    dispatch(addProductAction(newList));
  }

  function renderProduct({ item }: any) {
    if (item.isAdded) {
      return (
        <Sty.ItemListConteiner>
          <Sty.ImageItem source={{ uri: item.image_url }} />
          <Sty.ResumeItemContainer>
            <Sty.NameItem>{item.name}</Sty.NameItem>
            <Sty.PriceItem>{item.price} R$</Sty.PriceItem>
          </Sty.ResumeItemContainer>
          {/* <Text>{item.preco}</Text> */}
          <Checkbox
            status={item.isAdded ? 'checked' : 'unchecked'}
            onPress={() => pressCheck(item)}
          />
        </Sty.ItemListConteiner>
      );
    }

    return null;
  }

  function renderCategory({ item }: any) {
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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={{ flex: 1 }}
    >
      <Sty.Container>
        <Sty.ImputContainer>
          <Sty.SearchImput
            // onChangeText={setUserEmail}
            // value={userEmail}
            placeholder="Buscar Produtos"
          />
        </Sty.ImputContainer>
        <Sty.ListContainer>
          <FlatList
            // style={{ backgroundColor: 'black' }}
            data={groceryList}
            extraData={groceryList}
            renderItem={renderCategory}
            keyExtractor={(item: any, index: any) => index}
          />
        </Sty.ListContainer>
        <Sty.ResumeContainer>
          <Sty.IconList />
          <Sty.LeftResume>
            <Sty.ResumeText>Total de item</Sty.ResumeText>
            <Sty.ResumeText>valor total</Sty.ResumeText>
          </Sty.LeftResume>
          <Sty.RightResume>
            <Sty.ResumeText>10</Sty.ResumeText>
            <Sty.ResumeText>R$ 350</Sty.ResumeText>
          </Sty.RightResume>
        </Sty.ResumeContainer>
      </Sty.Container>
    </KeyboardAvoidingView>
  );
};

export default Shop;
