// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigation } from '@react-navigation/core';
import React, { useContext, useEffect } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { FAB } from 'react-native-paper';
import { ThemeContext } from 'styled-components';

import Button from '~/components/button';
import Input from '~/components/input';

import { ADDCATEGORY_SCREEN } from '~/constants/routes';

import * as Sty from './styles';

// import { Container } from './styles';

const AddProduct: React.FC = () => {
  const navigation = useNavigation();
  const { Colors } = useContext(ThemeContext);

  function handleAddCategory() {
    navigation.navigate(ADDCATEGORY_SCREEN);
    // navigation.setOptions({ title: 'Updated!' })};
  }

  function handleAddProduct() {
    console.log('adicionou pedido!'); // navigation.setOptions({ title: 'Updated!' })};
  }

  function handleAddImage() {
    console.log('adicionou imagem!'); // navigation.setOptions({ title: 'Updated!' })};
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
            // value={userName}
            // onChangeText={setUserName}
          />
          <Sty.RowInputContainer>
            <Input
              title="Quantidade"
              placeholder="Digite a quantidade"
              width={44}

              // labelSameLine
              // value={userName}
              // onChangeText={setUserName}
            />
            <Input
              title="Unidade"
              placeholder="Digite a unidade"
              width={44}
              dropwidth={185}
              type="dropdwon"

              // labelSameLine
              // value={userName}
              // onChangeText={setUserName}
            />
          </Sty.RowInputContainer>

          <Input
            title="Preço"
            placeholder="Digite o preço"
            width={90}

            // value={userName}
            // onChangeText={setUserName}
          />
          <Sty.AddCategoryContainer>
            <Input
              title="Categoria"
              placeholder="Selecione a categoria"
              width={55}
              dropwidth={232}
              type="dropdwon"

              // value={userName}
              // onChangeText={setUserName}<Button label="oi" actionBtn={handleAddCategory} />
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
