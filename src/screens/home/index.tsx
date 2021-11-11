import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { listCategory } from './mock';
import { renderCategory } from './utils';

import * as Sty from './styles';

const Home: React.FC = () => {
  // const { itemId } = route.params;

  return (
    <Sty.Container style={{ flex: 1 }}>
      <Sty.ImputContainer>
        <Sty.SearchImput
          // onChangeText={setUserEmail}
          // value={userEmail}
          placeholder="Digite seu email"
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
        <Text>Resumo</Text>
      </Sty.ResumeContainer>
    </Sty.Container>
  );
};

export default Home;
