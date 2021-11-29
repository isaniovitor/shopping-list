import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, FlatList, View } from 'react-native';
import { FAB, Checkbox } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import type { AplicationState } from '~/@types/entities/AplicationState';
import type { GroceryProps } from '~/@types/entities/Grocery';
import type { ProductProps } from '~/@types/entities/Product';
import { ADDPRODUCT_SCREEN, SHOP_SCREEN } from '~/constants/routes';
import { addProductAction } from '~/store/ducks/product/actions';

import * as Sty from './styles';
import { styles } from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { Colors } = useContext(ThemeContext);
  const [search, setSearch] = useState('');
  const { username } = useSelector((state: AplicationState) => state.user);
  const { groceryList } = useSelector(
    (state: AplicationState) => state.product,
  );
  const { categoryList } = useSelector(
    (state: AplicationState) => state.category,
  );

  function handleAddProduct() {
    console.log(categoryList);
    navigation.navigate(ADDPRODUCT_SCREEN);
  }

  function handleGoToCart() {
    navigation.navigate(SHOP_SCREEN);
  }

  useEffect(() => {
    navigation.setOptions({
      iconRight: 'md-cart',
      iconType: 'ionicons',
      actionButtonRight: handleGoToCart,
      iconColor: Colors.WHITE,
      title: `Bem vindo ${username}`,
    });
  }, [navigation, handleGoToCart, Colors, username]);

  function pressCheck(item) {
    const newList = groceryList;
    // console.log(newList.entries();
    newList.map(categoty => {
      if (categoty.name === item.category) {
        // categoty.listItems.find(product => product === item);
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
    return (
      <Sty.ItemListConteiner>
        <Sty.ImageItem source={{ uri: item.image_url }} />
        <Sty.ResumeItemContainer>
          <Sty.NameItem>{item.name}</Sty.NameItem>
          <Sty.PriceItem>{item.price} R$</Sty.PriceItem>
        </Sty.ResumeItemContainer>
        <Checkbox
          status={item.isAdded ? 'checked' : 'unchecked'}
          onPress={() => pressCheck(item)}
        />
      </Sty.ItemListConteiner>
    );
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
            value={search}
            onChangeText={setSearch}
            // onChange={list}
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
        <FAB
          style={styles.fab}
          color="white"
          icon="plus"
          onPress={handleAddProduct}
        />
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

export default Home;
