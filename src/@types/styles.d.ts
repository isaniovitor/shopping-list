import 'styled-components';

type ColorsProps = {
  BLUE: string;
  WHITE: string;
  ICON_NO_CLICKABLE: string;
  FONT_INPUT: string;
  ERROR: string;
  MEDIUM_GRAY: string;
  TEXT_NO_CLICKABLE: string;
  TEXT_CLICKABLE: string;
  ICON_COLOR_CLICKABLE: string;
  TITLE_TEXT: string;
};

type SizeProps = {
  FONTSIZE_BUTTON: number;
  FONTSIZE_INPUT: number;
  FONTSIZE_LABEL: number;
  FONTSIZE_INPUT_LABEL: number;
  ICON_SIZE: number;
  ICON_SIZE_BACK: number;
  ICON_SIZE_HEADER: number;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    Sizes: SizeProps;
    Colors: ColorsProps;
  }
}
