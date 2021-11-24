import React from 'react';

import * as Sty from './styles';

interface HeaderProps {
  enableNavigation?: boolean;
  title?: string;
  navigation: any;
  options: any;
}

export function Header({
  enableNavigation,
  title,
  navigation,
  options,
}: HeaderProps) {
  return (
    <Sty.Container>
      <Sty.StatusBar />
      {enableNavigation && (
        <Sty.ButtonLeft onPress={() => navigation.goBack()}>
          <Sty.IconBack color="white" />
        </Sty.ButtonLeft>
      )}
      <Sty.ContainerTitle
        enableNavigation={enableNavigation}
        iconRight={options?.iconRight}
      >
        <Sty.Title>{title || options?.title}</Sty.Title>
      </Sty.ContainerTitle>
      {options?.iconRight && (
        <Sty.ButtonRight onPress={() => options.actionButtonRight()}>
          <Sty.IconRight
            name={options?.iconRight}
            type={options.iconType}
            color={options.iconColor}
          />
        </Sty.ButtonRight>
      )}
    </Sty.Container>
  );
}

export const headerOption = {
  header: (props: any) => <Header {...props} />,
};
