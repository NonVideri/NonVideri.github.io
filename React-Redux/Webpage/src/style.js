import { createGlobalStyle } from 'styled-components';
import KarlaWoff from './fonts/Karla.woff';
import KarlaWoff2 from './fonts/Karla.woff2';
import SpectralWoff from './fonts/Spectral.woff';
import SpectralWoff2 from './fonts/Spectral.woff2';

export const theme = {
  colorMain: `hsl(180, 6%, 87%)`,
  colorBackground: `hsl(0, 0%, 0%)`,
  colorBoxes: `hsl(0, 0%, 7%)`,
  colorTitles: `hsl(120, 100%, 20%)`,
  colorMuted: `hsl(0, 0%, 42%)`,
  fontMain: `"Spectral", serif`,
  fontText: `"Karla", sans-serif`,
  transition: `all 0.5s`
};

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Karla';
  src: local('Karla'),
  url(${KarlaWoff2}) format('woff2'),
  url(${KarlaWoff}) format('woff');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Spectral';
  src: local('Spectral'),
  url(${SpectralWoff2}) format('woff2'),
  url(${SpectralWoff}) format('woff');
  font-weight: 300;
  font-style: normal;
}

* {
  box-sizing: border-box;

  &:focus {
    box-shadow: none;
  }
}

html {
  scroll-behavior: smooth;
}

body,
html {
  background-color: ${props => props.theme.colorBackground};
  color: ${props => props.theme.colorMain};
  font-size: 18px;
  line-height: 1.6;
  margin: 0;
  height: 100%;
  font-family: ${props => props.theme.fontText};
}

a {
  color: ${props => props.theme.colorTitles};

  &:hover {
    color: lighten(${props => props.theme.colorTitles}, 25%);
    transition: ${props => props.theme.transition};
  }
}

img {
  object-fit: cover;
  height: auto;
  width: auto;
}

section {
  padding: 60px 0;
  margin: 10px;
}

.section-title {
  position: relative;
  margin: 0 0 60px 0;
  text-align: center;
  color: ${props => props.theme.colorTitles};
  font-family: ${props => props.theme.fontMain};
  font-weight: bold;

  &:after {
    position: absolute;
    display: block;
    content: ' ';
    width: 200px;
    height: 5px;
    background: ${props => props.theme.colorMain};
    left: 50%;
    bottom: -16px;
    margin-left: -100px;
  }
}

.section-intro {
  margin: 0 0 40px;
  text-align: center;
  color: ${props => props.theme.colorTitles};
}

.container {
  max-width: 980px;
  margin: 0 auto;
  padding: 0 20px;
}

.btn {
  margin: 12px 12px 16px 0px;
}

.description {
  padding: 0 24px;
}
`;
