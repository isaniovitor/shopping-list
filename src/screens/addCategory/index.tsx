// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigation } from '@react-navigation/core';
import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { ThemeContext } from 'styled-components';

// import { Container } from './styles';

const AddCategory: React.FC = () => {
  const navigation = useNavigation();
  const { Colors } = useContext(ThemeContext);

  useEffect(() => {
    navigation.setOptions({
      iconType: 'ionicons',
      iconColor: Colors.WHITE,
      title: 'Cadastrar Categoria',
    });
  }, [navigation, Colors]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Add Category</Text>
    </View>
  );
};

export default AddCategory;
