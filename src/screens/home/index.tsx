import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { FAB } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import type { AplicationState } from '~/@types/entities/AplicationState';
import { ADDPRODUCT_SCREEN, SHOP_SCREEN } from '~/constants/routes';

import { listCategory } from './mock';
import { renderCategory } from './utils';

import * as Sty from './styles';
import { styles } from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { Colors } = useContext(ThemeContext);
  const [search, setSearch] = useState('');
  const { username } = useSelector((state: AplicationState) => state.user);
  const listItems: void[] = [];

  function handleAddProduct() {
    navigation.navigate(ADDPRODUCT_SCREEN);
  }

  function handleGoToCart() {
    navigation.navigate(SHOP_SCREEN);
  }

  // function list(text: string) {gg

  //   listCategory.forEach(item => {
  //     if (item.name.includes(text)) {
  //       listItems.push(item);
  //     }
  //   });
  // }
  // const handleGoToCart = () => {
  //   navigation.navigate(ADDCATEGORY_SCREEN);
  // };

  useEffect(() => {
    navigation.setOptions({
      iconRight: 'md-cart',
      iconType: 'ionicons',
      actionButtonRight: handleGoToCart,
      iconColor: Colors.WHITE,
      title: `Bem vindo ${username}`,
    });
  }, [navigation, handleGoToCart, Colors, username]);

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
            data={listCategory}
            extraData={listCategory}
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
