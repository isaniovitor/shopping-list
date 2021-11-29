// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigation } from '@react-navigation/core';
import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import Button from '~/components/button';
import Input from '~/components/input';

import type { AplicationState } from '~/@types/entities/AplicationState';
import type { CategoryProps } from '~/@types/entities/Category';
import {
  addCategoryAction,
  addProductAction,
} from '~/store/ducks/category/actions';

import * as Sty from './styles';

const AddCategory: React.FC = () => {
  const [userName, setUserName] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { Colors } = useContext(ThemeContext);
  const { categoryList } = useSelector(
    (state: AplicationState) => state.category,
  );

  function handleAddCategory() {
    const newList = categoryList;
    const newCategory: CategoryProps = {
      id: 5,
      name: userName,
    };

    newList.push(newCategory);
    dispatch(addCategoryAction(newList));
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
        type="input"
        placeholder="Digite o nome a categoria"
        value={userName}
        onChangeText={setUserName}
        width={90}
      />
      <View style={{ flex: 0.2, marginTop: 40 }}>
        <Button color="white" label="Salvar" actionBtn={handleAddCategory} />
      </View>
    </Sty.AddCategoryContainer>
  );
};

export default AddCategory;
