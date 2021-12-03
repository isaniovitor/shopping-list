import { useNavigation, useRoute } from '@react-navigation/core';
import { cloneDeep } from 'lodash';
import React, { useContext, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { FAB } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';

import Button from '~/components/button';
import Picker from '~/components/dropDwon';
import Input from '~/components/input';

import type { AplicationState } from '~/@types/entities/AplicationState';
import type { CategoryProps } from '~/@types/entities/Category';
import type { ProductProps } from '~/@types/entities/Product';
import { ADDCATEGORY_SCREEN, HOME_SCREEN } from '~/constants/routes';
import { addProductAction } from '~/store/ducks/product/actions';

import * as Sty from './styles';

const AddProduct: React.FC = () => {
  const route = useRoute();
  const { item } = route.params;
  const [userPhoto, setUserPhoto] = useState(
    'https://a-static.mlcdn.com.br/618x463/detergente-liquido-ype-neutro-500ml/costaatacado/90146/bc45e8e91700e557fe42944c14353cac.jpg',
  );
  const [userName, setUserName] = useState('');
  const [userQuantity, setUserQuantity] = useState('');
  const [userUnity, setUserUnity] = useState('');
  const [userPrice, setUserPrice] = useState('');
  const [userCategory, setUserCategory] = useState({ id: '', name: '' });
  const { groceryList } = useSelector(
    (state: AplicationState) => state.product,
  );
  const { categoryList } = useSelector(
    (state: AplicationState) => state.category,
  );

  const navigation = useNavigation();
  const { Colors } = useContext(ThemeContext);
  const dispatch = useDispatch();

  function handleAddCategory() {
    navigation.navigate(ADDCATEGORY_SCREEN);
  }

  function handleAddProduct() {
    const newList = cloneDeep(groceryList);
    let newItem: ProductProps;

    newList.map(item => {
      if (item.id === userCategory.id) {
        newItem = {
          id: uuidv4(),
          name: userName,
          amount: userQuantity,
          price: userPrice,
          unidade: userUnity,
          image_url: userPhoto,
          isAdded: false,
          category: userCategory,
        };
        item.listItems.push(newItem);
      }
      return navigation.navigate(HOME_SCREEN);
    });

    dispatch(addProductAction(newList));
  }

  function handleEditProduct() {
    const newList = cloneDeep(groceryList);
    const EditedItem: ProductProps = {
      id: item.id,
      name: userName,
      amount: userQuantity,
      price: userPrice,
      unidade: userUnity,
      image_url: userPhoto,
      isAdded: item.isAdded,
      category: userCategory,
    };

    newList.map(category => {
      if (category.id === userCategory.id) {
        category.listItems.map(product => {
          if (product.id === item.id)
            category.listItems[category.listItems.indexOf(product)] =
              EditedItem;

          return navigation.navigate(HOME_SCREEN);
        });
      }
      return null;
    });

    dispatch(addProductAction(newList));
  }

  useEffect(() => {
    navigation.setOptions({
      iconType: 'ionicons',
      iconColor: Colors.WHITE,
      title: item ? 'Editar Produto' : 'Adicionar Produto',
    });

    if (item) {
      setUserName(item.name);
      setUserQuantity(item.amount);
      setUserUnity(item.unidade);
      setUserCategory(item.category);
      setUserPrice(item.price);
    }
  }, [navigation, Colors, item]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={{ flex: 1 }}
    >
      <Sty.Container>
        <Sty.ImageContainer>
          <FAB style={Sty.styles.imagefab} color="white" icon="image" />
        </Sty.ImageContainer>
        <Sty.InputContainer>
          <Input
            title="Nome"
            placeholder="Digite o nome do produto"
            width={90}
            type="input"
            value={userName}
            onChangeText={setUserName}
          />
          <Sty.RowInputContainer>
            <Input
              title="Quantidade"
              placeholder="Digite a quantidade"
              width={44}
              type="input"
              value={userQuantity}
              onChangeText={setUserQuantity}
            />
            <Input
              title="Unidade"
              placeholder="Digite a unidade"
              width={44}
              dropwidth={185}
              type="input"
              value={userUnity}
              onChangeText={setUserUnity}
            />
          </Sty.RowInputContainer>

          <Input
            title="Preço"
            placeholder="Digite o preço"
            width={90}
            type="input"
            value={userPrice}
            onChangeText={setUserPrice}
          />
          <Sty.AddCategoryContainer>
            <Picker
              itemSelect={userCategory}
              setItem={setUserCategory}
              categories={categoryList}
              disabled={false}
            />
            <FAB
              style={Sty.styles.fab}
              color="white"
              icon="pen"
              onPress={handleAddCategory}
            />
          </Sty.AddCategoryContainer>
        </Sty.InputContainer>
        <Sty.ButtonContainer>
          <Button
            color="white"
            label="Salvar"
            actionBtn={() => (item ? handleEditProduct() : handleAddProduct())}
          />
        </Sty.ButtonContainer>
      </Sty.Container>
    </KeyboardAvoidingView>
  );
};

export default AddProduct;
