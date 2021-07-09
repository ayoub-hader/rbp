import { createGlobalStyle } from 'styled-components';
import sourceSansProBlackWebfont from 'fonts/sourcesanspro-black-webfont.woff2';
import sourceSansProBlackWebfontTwo from 'fonts/sourcesanspro-black-webfont.woff';
import sourceSansProBlackItalicWebfont from 'fonts/sourcesanspro-blackitalic-webfont.woff2';
import sourceSansProBlackItalicWebfontTwo from 'fonts/sourcesanspro-blackitalic-webfont.woff';
import sourceSansProBold from 'fonts/sourcesanspro-bold-webfont.woff2';
import sourceSansProBoldTwo from 'fonts/sourcesanspro-bold-webfont.woff';
import sourceSansProBoldItalic from 'fonts/sourcesanspro-bolditalic-webfont.woff2';
import sourceSansProBoldItalicTwo from 'fonts/sourcesanspro-bolditalic-webfont.woff';
import sourceSansProExtraLight from 'fonts/sourcesanspro-extralight-webfont.woff2';
import sourceSansProExtraLightTwo from 'fonts/sourcesanspro-extralight-webfont.woff';
import sourceSansProExtraLightItalic from 'fonts/sourcesanspro-extralightitalic-webfont.woff2';
import sourceSansProExtraLightItalicTwo from 'fonts/sourcesanspro-extralightitalic-webfont.woff';
import sourceSansProItalic from 'fonts/sourcesanspro-italic-webfont.woff2';
import sourceSansProItalicTwo from 'fonts/sourcesanspro-italic-webfont.woff';
import sourceSansProLight from 'fonts/sourcesanspro-light-webfont.woff2';
import sourceSansProLightTwo from 'fonts/sourcesanspro-light-webfont.woff';
import sourceSansProLightItalic from 'fonts/sourcesanspro-lightitalic-webfont.woff2';
import sourceSansProLightItalicTwo from 'fonts/sourcesanspro-lightitalic-webfont.woff';
import sourceSansProRegular from 'fonts/sourcesanspro-regular-webfont.woff2';
import sourceSansProRegularTwo from 'fonts/sourcesanspro-regular-webfont.woff';
import sourceSansProSemiBold from 'fonts/sourcesanspro-semibold-webfont.woff2';
import sourceSansProSemiBoldTwo from 'fonts/sourcesanspro-semibold-webfont.woff';
import sourceSansProSemiBoldItalic from 'fonts/sourcesanspro-semibolditalic-webfont.woff2';
import sourceSansProSemiBoldItalicTwo from 'fonts/sourcesanspro-semibolditalic-webfont.woff';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'source_sans_problack';
    src: url('${sourceSansProBlackWebfont}') format('woff2'),
    url('${sourceSansProBlackWebfontTwo}') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'source_sans_problack_italic';
    src: url('${sourceSansProBlackItalicWebfont}') format('woff2'),
    url('${sourceSansProBlackItalicWebfontTwo}') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'source_sans_probold';
    src: url('${sourceSansProBold}') format('woff2'),
    url('${sourceSansProBoldTwo}') format('woff');
    font-weight: normal;
    font-style: normal;

  }
  @font-face {
    font-family: 'source_sans_probold_italic';
    src: url('${sourceSansProBoldItalic}') format('woff2'),
    url('${sourceSansProBoldItalicTwo}') format('woff');
    font-weight: normal;
    font-style: normal;

  }
  @font-face {
    font-family: 'source_sans_proextralight';
    src: url('${sourceSansProExtraLight}') format('woff2'),
    url('${sourceSansProExtraLightTwo}') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'source_sans_proXLtIt';
    src: url('${sourceSansProExtraLightItalic}') format('woff2'),
    url('${sourceSansProExtraLightItalicTwo}') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'source_sans_proitalic';
    src: url('${sourceSansProItalic}') format('woff2'),
    url('${sourceSansProItalicTwo}') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'source_sans_prolight';
    src: url('${sourceSansProLight}') format('woff2'),
    url('${sourceSansProLightTwo}') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'source_sans_prolight_italic';
    src: url('${sourceSansProLightItalic}') format('woff2'),
    url('${sourceSansProLightItalicTwo}') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'source_sans_proregular';
    src: url('${sourceSansProRegular}') format('woff2'),
    url('${sourceSansProRegularTwo}') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'source_sans_prosemibold';
    src: url('${sourceSansProSemiBold}') format('woff2'),
    url('${sourceSansProSemiBoldTwo}') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'source_sans_proSBdIt';
    src: url('${sourceSansProSemiBoldItalic}') format('woff2'),
    url('${sourceSansProSemiBoldItalicTwo}') format('woff');
    font-weight: normal;
    font-style: normal;

  }
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'source_sans_prosemibold';
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    /*font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;*/
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
  a{
    text-decoration: none;
  }
  h1, h2, h3, h4, h5, h6, ul, li{
     margin: 0;
     padding: 0;
   }
  li{
    list-style-type: none;
  }
  .mb-40 {
    margin-bottom: 40px;
  }
  .mb-20 {
    margin-bottom: 20px;
  }
`;

export default GlobalStyle;
