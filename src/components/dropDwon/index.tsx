import React, { useContext, useState } from 'react';
import { FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import type { AplicationState } from '~/@types/entities/AplicationState';
import type { CategoryProps } from '~/@types/entities/Category';

import * as S from './styles';

interface Props {
  itemSelect: any;
  setItem: (item: any) => void;
  categories: CategoryProps[];
  disabled: boolean;
}

export function Picker({ itemSelect, setItem, categories, disabled }: Props) {
  const [showList, setShowList] = useState(false);
  const { Colors } = useContext(ThemeContext);

  const selectItem = (item: any) => {
    setItem(item);
    setShowList(false);
  };

  function renderItems(item) {
    // console.log(item.item);
    return (
      <S.Touchable key={item.item.id} onPress={() => selectItem(item.item)}>
        <S.ContainerList>
          <S.TitleItem>{item.item.name}</S.TitleItem>
        </S.ContainerList>
      </S.Touchable>
    );
  }

  return (
    <S.Container>
      <S.ContainerPicker>
        {!showList && (
          <S.Touchable
            disabled={disabled}
            onPress={() => setShowList(!showList)}
          >
            <S.PlaceholderText>
              {itemSelect.name || 'Selecione a categoria'}
            </S.PlaceholderText>
            <S.IconPicker
              color={Colors.TEXT_CLICKABLE}
              size={20}
              type="font-5"
              name={showList ? 'angle-up' : 'angle-down'}
            />
          </S.Touchable>
        )}

        {showList && (
          <FlatList
            data={categories}
            extraData={categories}
            renderItem={renderItems}
            keyExtractor={(item: any, index: any) => index}
          />
        )}
      </S.ContainerPicker>
    </S.Container>
  );
}

export default Picker;
