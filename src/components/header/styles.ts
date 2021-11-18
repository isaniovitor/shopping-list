import styled from 'styled-components/native';

import Icon from '~/components/icon';
import NewText from '~/components/text';

import { s, sfs, vs } from '~/utils/responsibleText';

interface Props {
  enableNavigation?: boolean;
  iconRight?: string;
}

export const Container = styled.View`
  height: ${vs(50)}px;
  width: 100%;
  background: ${({ theme }) => theme.Colors.BLUE};

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StatusBar = styled.StatusBar.attrs(({ theme }) => ({
  backgroundColor: theme.Colors.BLUE,
}))``;

export const ContainerTitle = styled.View<Props>`
  flex: ${({ enableNavigation, iconRight }) =>
    enableNavigation || iconRight ? 0.8 : 1};
`;

export const Title = styled(NewText).attrs({
  fontSize: sfs(23),
})`
  font-weight: bold;
  color: ${({ theme }) => theme.Colors.WHITE};
  margin-left: 18px;
`;

export const ButtonLeft = styled.TouchableOpacity`
  flex: 0.2;
  margin-left: -10px;
  color: ${({ theme }) => theme.Colors.WHITE};
`;

export const IconColor = styled(Icon).attrs(({ theme }) => ({
  name: 'invert-colors',
  size: theme.Sizes.ICON_SIZE,
}))`
  color: ${({ theme }) => theme.Colors.TEXT_CLICKABLE};
`;

export const IconBack = styled(Icon).attrs(({ theme }) => ({
  name: 'chevron-left',
  size: theme.Sizes.ICON_SIZE_BACK,
}))`
  color: ${({ theme }) => theme.Colors.TEXT_CLICKABLE};
`;

export const ButtonRight = styled.TouchableOpacity`
  flex: 0.2;
  margin-right: -30px;
`;

export const IconRight = styled(Icon).attrs(({ theme }) => ({
  size: theme.Sizes.ICON_SIZE_HEADER,
}))``;
