import { createGlobalStyle } from 'styled-components';
import { COLORS } from './colors';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${COLORS.neutral};
  }
`;

export default GlobalStyle;
