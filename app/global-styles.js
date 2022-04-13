import { createGlobalStyle } from 'styled-components';
import normalize from './theme/styled-normalize';
import { AppTheme } from './theme/app-theme';
import { GlobalFontStyle } from './theme/fonts/style';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${GlobalFontStyle}
  body {
    overflow: hidden;
    text-align: left;
    color: ${AppTheme.GreyColors[700]};
    background-color: ${AppTheme.GreyColors[100]};
    ${AppTheme.Fonts.Family}
    ${AppTheme.Fonts.Weight[400]}
    ${AppTheme.Fonts.Scale.Display}
`;

export default GlobalStyle;
