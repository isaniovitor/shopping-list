// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigation } from '@react-navigation/core';
import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';
import { ThemeContext } from 'styled-components';

import Button from '~/components/button';
import Input from '~/components/input';

import * as Sty from './styles';

const AddCategory: React.FC = () => {
  const navigation = useNavigation();
  const { Colors } = useContext(ThemeContext);

  function handleAddCategory() {
    console.log('adicionou categoria!'); // navigation.setOptions({ title: 'Updated!' })};
  }

  useEffect(() => {
    navigation.setOptions({
      iconType: 'ionicons',
      iconColor: Colors.WHITE,
      title: 'Cadastrar Categoria',
    });
  }, [navigation, Colors]);

  return (
    <Sty.AddCategoryContainer>
      <Input
        title="Nome da categoria"
        placeholder="Digite o nome a categoria"
        width={90}
      />
      <View style={{ flex: 0.2, marginTop: 40}}>
        <Button color="white" label="Salvar" actionBtn={handleAddCategory} />
      </View>
    </Sty.AddCategoryContainer>
  );
};

export default AddCategory;
