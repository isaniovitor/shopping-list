import { useNavigation } from '@react-navigation/native';
import { cloneDeep } from 'lodash';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, FlatList, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import { ModalGlobal } from '~/components/modal';
import Resume from '~/components/resume';

import type { AplicationState } from '~/@types/entities/AplicationState';
import type { CategoryProps } from '~/@types/entities/Category';
import type { GroceryProps } from '~/@types/entities/Grocery';
import type { ProductProps } from '~/@types/entities/Product';
import { addProductAction } from '~/store/ducks/product/actions';

import * as Sty from './styles';

const Shop: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { Colors } = useContext(ThemeContext);
  const [search, setSearch] = useState('');
  const [visible, setVisible] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [length, setLength] = useState(0);
  const [allListItems, setAllListItems] = useState<GroceryProps[] | []>([]);
  const [itemModal, setItemModal] = useState<ProductProps>();
  const [listItemsFilter, setListItemsFilter] = useState<ProductProps[] | []>(
    [],
  );
  const { groceryList } = useSelector(
    (state: AplicationState) => state.product,
  );

  // functions
  function pressCheck(item: ProductProps) {
    const newList = cloneDeep(groceryList);
    newList.map(categoty => {
      // usando o nome pq o uuid n deu certo
      if (categoty.id === item.category.id) {
        categoty.listItems.map(product => {
          if (product.id === item.id) {
            product.isAdded = !product.isAdded;
          }
          return null;
        });
      }
      return null;
    });

    dispatch(addProductAction(newList));
  }

  function showModal(item: ProductProps) {
    setVisible(true);
    setItemModal(item);
  }

  // header navegation
  useEffect(() => {
    navigation.setOptions({
      iconType: 'ionicons',
      iconColor: Colors.WHITE,
      title: 'Carrinho de Compras',
    });
  }, [navigation, Colors]);

  // Search
  useEffect(() => {
    const newList = cloneDeep(groceryList);
    newList.map((currentItem: GroceryProps) => {
      currentItem.listItems.map((item: ProductProps) => {
        if (!item.isAdded) return currentItem.listItems.pop(item);
        return null;
      });
      return setAllListItems(newList);
    });
  }, [groceryList]);

  useEffect(() => {
    let som = 0;
    let len = 0;

    allListItems.map(category => {
      category.listItems.map((item: ProductProps) => {
        som += Number(item.price) * Number(item.amount);
        len += Number(item.amount);
        return null;
      });
      return null;
    });

    setTotalPrice(som);
    setLength(len);
  }, [allListItems]);

  const updateItemsFilter = useCallback(() => {
    const itemsFilter: ProductProps[] | [] = [];
    allListItems.map(listItem => {
      listItem.listItems.map(item => {
        if (item.name.toUpperCase().includes(search.toUpperCase()))
          return itemsFilter.push(item);
        return null;
      });
      return itemsFilter;
    });

    setListItemsFilter(itemsFilter);
  }, [allListItems, search]);

  useEffect(() => {
    if (search) {
      updateItemsFilter();
    } else {
      setListItemsFilter([]);
    }
  }, [search, updateItemsFilter]);

  // renders
  function renderProduct({ item }: ProductProps) {
    if (item.isAdded) {
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
    return null;
  }

  function renderCategory({ item }: CategoryProps) {
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
              data={allListItems}
              extraData={allListItems}
              renderItem={renderCategory}
              keyExtractor={(item: any, index: any) => index}
            />
          )}
        </Sty.ListContainer>

        <Resume qtdItems={length} totalPrice={totalPrice} />
      </Sty.Container>
    </KeyboardAvoidingView>
  );
};

export default Shop;
