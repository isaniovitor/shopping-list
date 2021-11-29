// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigation } from '@react-navigation/core';
import React, { useContext, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { FAB } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import Button from '~/components/button';
import Picker from '~/components/dropDwon';
import Input from '~/components/input';

import type { AplicationState } from '~/@types/entities/AplicationState';
import type { ProductProps } from '~/@types/entities/Product';
import { ADDCATEGORY_SCREEN } from '~/constants/routes';
import { addProductAction } from '~/store/ducks/product/actions';

import * as Sty from './styles';

// import { Container } from './styles';

const AddProduct: React.FC = () => {
  const [userPhoto, setUserPhoto] = useState(
    'https://a-static.mlcdn.com.br/618x463/detergente-liquido-ype-neutro-500ml/costaatacado/90146/bc45e8e91700e557fe42944c14353cac.jpg',
  );
  const [userName, setUserName] = useState('');
  const [userQuantity, setUserQuantity] = useState('');
  const [userUnity, setUserUnity] = useState('');
  const [userPrice, setUserPrice] = useState('');
  const [userCategory, setUserCategory] = useState('');
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
    const newList = groceryList;
    let newItem: ProductProps;

    newList.map(item => {
      if (item.name === userCategory) {
        newItem = {
          id: '1',
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
      return null;
    });

    dispatch(addProductAction(newList));
  }

  function handleAddImage() {
    console.log('adicionou imagem!'); // navigation.setOptions({ title: 'Updated!' })};
    setUserPhoto('imagem');
  }

  useEffect(() => {
    navigation.setOptions({
      iconType: 'ionicons',
      iconColor: Colors.WHITE,
      title: 'Cadastrar Produtos',
    });
  }, [navigation, Colors]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={{ flex: 1 }}
    >
      <Sty.Container>
        <Sty.ImageContainer>
          <FAB
            style={Sty.styles.imagefab}
            color="white"
            icon="image"
            onPress={handleAddImage}
          />
        </Sty.ImageContainer>
        <Sty.InputContainer>
          <Input
            title="Nome"
            placeholder="Digite o nome do produto"
            width={90}
            type="input"
            value={userName}
            onChangeText={setUserName}
            // value={userName}
            // onChangeText={setUserName}
          />
          <Sty.RowInputContainer>
            <Input
              title="Quantidade"
              placeholder="Digite a quantidade"
              width={44}
              type="input"
              value={userQuantity}
              onChangeText={setUserQuantity}

              // labelSameLine
              // value={userName}
              // onChangeText={setUserName}
            />
            <Input
              title="Unidade"
              placeholder="Digite a unidade"
              width={44}
              dropwidth={185}
              // type="dropdwon"
              type="input"
              value={userUnity}
              onChangeText={setUserUnity}

              // labelSameLine
              // value={userName}
              // onChangeText={setUserName}
            />
          </Sty.RowInputContainer>

          <Input
            title="Preço"
            placeholder="Digite o preço"
            width={90}
            type="input"
            value={userPrice}
            onChangeText={setUserPrice}

            // value={userName}
            // onChangeText={setUserName}
          />
          <Sty.AddCategoryContainer>
            <Picker
              itemSelect={userCategory}
              setItem={setUserCategory}
              categories={groceryList}
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
          <Button color="white" label="Salvar" actionBtn={handleAddProduct} />
        </Sty.ButtonContainer>
      </Sty.Container>
    </KeyboardAvoidingView>
  );
};

export default AddProduct;
