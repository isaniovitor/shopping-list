import { useNavigation } from '@react-navigation/core';
import { cloneDeep } from 'lodash';
import React from 'react';
import { Portal, Modal } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import type { AplicationState } from '~/@types/entities/AplicationState';
import type { ProductProps } from '~/@types/entities/Product';
import { ADDPRODUCT_SCREEN, HOME_SCREEN } from '~/constants/routes';
import { addProductAction } from '~/store/ducks/product/actions';

import * as S from './styles';

interface Props {
  visible: boolean;
  setVisible: (show: boolean) => void;
  Editem: ProductProps;
}

export function ModalGlobal({ Editem, visible, setVisible }: Props) {
  const hideModal = () => setVisible(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { groceryList } = useSelector(
    (state: AplicationState) => state.product,
  );

  function handleEditProduct() {
    hideModal();
    navigation.navigate(ADDPRODUCT_SCREEN, { item: Editem });
  }

  function handleRemoveProduct() {
    const newList = cloneDeep(groceryList);

    newList.map(category => {
      // mudei aq
      if (category.id === Editem.category.id) {
        category.listItems.map(product => {
          if (product.name === Editem.name) category.listItems.pop(product);
          return navigation.navigate(HOME_SCREEN);
        });
      }
      return null;
    });

    hideModal();
    dispatch(addProductAction(newList));
  }

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={S.containerModal}
      >
        {Editem && <S.Title>{Editem.name}</S.Title>}
        <S.Container>
          <S.Button onPress={() => handleRemoveProduct()} color="red">
            <S.TextButton color="red">Excluir</S.TextButton>
          </S.Button>
          <S.Button onPress={() => handleEditProduct()} color="white">
            <S.TextButton color="white">Editar</S.TextButton>
          </S.Button>
        </S.Container>
      </Modal>
    </Portal>
  );
}
