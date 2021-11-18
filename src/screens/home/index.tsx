import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, Text } from 'react-native';
import { FAB } from 'react-native-paper';
import { ThemeContext } from 'styled-components';

import { ADDCATEGORY_SCREEN, ADDPRODUCT_SCREEN } from '~/constants/routes';

import { listCategory } from './mock';
import { renderCategory } from './utils';

import * as Sty from './styles';
import { styles } from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { Colors } = useContext(ThemeContext);

  function handleAddProduct() {
    navigation.navigate(ADDPRODUCT_SCREEN);
  }

  function handleGoToCart() {
    console.log('deu bom');
  }

  // const handleGoToCart = () => {
  //   navigation.navigate(ADDCATEGORY_SCREEN);
  // };

  useEffect(() => {
    navigation.setOptions({
      iconRight: 'md-cart',
      iconType: 'ionicons',
      actionButtonRight: handleGoToCart,
      iconColor: Colors.WHITE,
      title: 'Bem vindo Ruan',
    });
  }, [navigation, handleGoToCart, Colors]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={{ flex: 1 }}
    >
      <Sty.Container style={{ flex: 1 }}>
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
            data={listCategory}
            extraData={listCategory}
            renderItem={renderCategory}
            keyExtractor={(item: any, index: any) => index}
          />
        </Sty.ListContainer>
        <FAB style={styles.fab} icon="plus" onPress={handleAddProduct} />
        <Sty.ResumeContainer>
          <Text>Resumo</Text>
        </Sty.ResumeContainer>
      </Sty.Container>
    </KeyboardAvoidingView>
  );
};

export default Home;
