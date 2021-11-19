// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigation } from '@react-navigation/core';
import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { ThemeContext } from 'styled-components';

import Input from '~/components/input';

// import { Container } from './styles';

const AddProduct: React.FC = () => {
  const navigation = useNavigation();
  const { Colors } = useContext(ThemeContext);

  useEffect(() => {
    navigation.setOptions({
      // iconType: 'ionicons',
      iconColor: Colors.WHITE,
      title: 'Cadastrar Produtos',
    });
  }, [navigation, Colors]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Input

        title="Nome"
        placeholder="Digite o nome do produto"
        width={90}

        //value={userName}
        //onChangeText={setUserName}
      />
    </View>
  );
};

export default AddProduct;
