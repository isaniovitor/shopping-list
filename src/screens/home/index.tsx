import { useNavigation } from '@react-navigation/native';
import { includes, filter, toUpper } from 'lodash';
import React, { useContext, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, FlatList, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FAB, Checkbox } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import { ModalGlobal } from '~/components/modal';
import Resume from '~/components/resume';

import type { AplicationState } from '~/@types/entities/AplicationState';
import type { GroceryProps } from '~/@types/entities/Grocery';
import type { ProductProps } from '~/@types/entities/Product';
import { ADDPRODUCT_SCREEN, SHOP_SCREEN } from '~/constants/routes';
import { addProductAction } from '~/store/ducks/product/actions';

import * as Sty from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { Colors } = useContext(ThemeContext);
  const [search, setSearch] = useState('');
  const [visible, setVisible] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [list, setList] = useState<GroceryProps[] | []>([]);
  const [allListItems, setAllListItems] = useState<ProductProps[] | []>([]);
  const [itemModal, setItemModal] = useState<ProductProps>();
  const [listItemsFilter, setListItemsFilter] = useState<ProductProps[] | []>(
    [],
  );
  const { username } = useSelector((state: AplicationState) => state.user);
  const { groceryList } = useSelector(
    (state: AplicationState) => state.product,
  );

  // functions
  function handleAddProduct() {
    navigation.navigate(ADDPRODUCT_SCREEN, { item: null });
  }

  function handleGoToCart() {
    navigation.navigate(SHOP_SCREEN);
  }

  function pressCheck(item) {
    const newList = groceryList;
    newList.map(categoty => {
      // usando o nome pq o uuid n deu certo
      if (categoty.name === item.category.name) {
        categoty.listItems.map(product => {
          if (product === item) product.isAdded = !product.isAdded;
          return null;
        });
      }
      return null;
    });

    dispatch(addProductAction(newList));
  }

  function showModal(item) {
    setVisible(true);
    setItemModal(item);
  }

  // header navegation
  useEffect(() => {
    navigation.setOptions({
      iconRight: 'md-cart',
      iconType: 'ionicons',
      actionButtonRight: handleGoToCart,
      iconColor: Colors.WHITE,
      title: `Bem vindo ${username}`,
    });
  }, [navigation, handleGoToCart, Colors, username]);

  // Search
  useEffect(() => {
    const newList: ProductProps[] | [] = [];
    groceryList.map((currentItem: GroceryProps) => {
      currentItem.listItems.map((item: ProductProps) => {
        return newList.push(item);
      });
      return null;
    });
    setAllListItems(newList);
  }, [groceryList]);

  useEffect(() => {
    let som = 0;
    allListItems.map((item: ProductProps) => {
      som += Number(item.price);
      return null;
    });
    setTotalPrice(som);
  }, [allListItems]);

  useEffect(() => {
    const newList = groceryList.filter(
      (currentItem: GroceryProps) => currentItem.listItems.length !== 0,
    );
    setList(newList);
  }, [groceryList]);

  const updateItemsFilter = () => {
    let itemsFilter = [];
    itemsFilter = filter(allListItems, item =>
      includes(toUpper(item.name), toUpper(search)),
    );
    setListItemsFilter(itemsFilter);
  };

  useEffect(() => {
    if (search) {
      updateItemsFilter();
    }
    // else {
    //   setListItemsFilter([]);
    // }
  }, [search, updateItemsFilter]);
  // end search

  // renders
  function renderProduct({ item }: any) {
    return (
      <Sty.ItemListConteiner>
        <Sty.TouchableOpacity onPress={() => showModal(item)}>
          <Sty.ImageItem source={{ uri: item.image_url }} />
          <Sty.ResumeItemContainer>
            <Sty.NameItem>{item.name}</Sty.NameItem>
            <Sty.PriceItem>{item.price} R$</Sty.PriceItem>
          </Sty.ResumeItemContainer>
        </Sty.TouchableOpacity>
        <Checkbox
          status={item.isAdded ? 'checked' : 'unchecked'}
          onPress={() => pressCheck(item)}
        />
      </Sty.ItemListConteiner>
    );
  }

  function renderCategory({ item }: any) {
    if (item.listItems.length !== 0) {
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
    return null;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={{ flex: 1 }}
    >
      <ModalGlobal
        visible={visible}
        setVisible={setVisible}
        Editem={itemModal}
      />
      <Sty.Container>
        <Sty.ImputContainer>
          <Sty.SearchImput
            value={search}
            onChangeText={setSearch}
            placeholder="Buscar Produtos"
          />
        </Sty.ImputContainer>
        <Sty.ListContainer>
          {listItemsFilter.length > 0 ? (
            <FlatList
              data={listItemsFilter}
              extraData={listItemsFilter}
              renderItem={renderProduct}
              keyExtractor={(item: any, index: any) => index}
            />
          ) : (
            <FlatList
              data={groceryList}
              extraData={groceryList}
              renderItem={renderCategory}
              keyExtractor={(item: any, index: any) => index}
            />
          )}
        </Sty.ListContainer>
        <FAB
          style={Sty.styles.fab}
          color="white"
          icon="plus"
          onPress={handleAddProduct}
        />

        <Resume qtdItems={allListItems.length} totalPrice={totalPrice} />
      </Sty.Container>
    </KeyboardAvoidingView>
  );
};

export default Home;
