import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { FAB } from 'react-native-paper';
import { ThemeContext } from 'styled-components';

import { ADDPRODUCT_SCREEN } from '~/constants/routes';

import { renderCategory } from './utils';

import * as Sty from './styles';
import { styles } from './styles';
import { listCategory } from '../home/mock';

const Shop: React.FC = () => {
  const navigation = useNavigation();
  const { Colors } = useContext(ThemeContext);

  useEffect(() => {
    navigation.setOptions({
      iconType: 'ionicons',
      iconColor: Colors.WHITE,
      title: 'Carrinho',
    });
  }, [navigation, Colors]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={{ flex: 1 }}
    >
      <Sty.Container>
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

export default Shop;
