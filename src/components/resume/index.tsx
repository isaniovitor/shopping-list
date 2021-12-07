import React, { useContext, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import type { AplicationState } from '~/@types/entities/AplicationState';
import type { CategoryProps } from '~/@types/entities/Category';
import type { GroceryProps } from '~/@types/entities/Grocery';

import * as Sty from './styles';

interface Props {
  qtdItems: number;
  totalPrice: number;
}

export function Resume({ qtdItems, totalPrice }: Props) {
  return (
    <Sty.ResumeContainer>
      <Sty.IconList />
      <Sty.LeftResume>
        <Sty.ResumeText>Total de item</Sty.ResumeText>
        <Sty.ResumeText>valor total</Sty.ResumeText>
      </Sty.LeftResume>
      <Sty.RightResume>
        <Sty.ResumeText>{qtdItems}</Sty.ResumeText>
        <Sty.ResumeText>R$ {totalPrice}</Sty.ResumeText>
      </Sty.RightResume>
    </Sty.ResumeContainer>
  );
}

export default Resume;
