import styled from "@emotion/styled";

export const fontSizes = {
  small: '1.4rem',
  normal: '1.6rem',
  big: '2rem',
};

export const fontWeights = {
  regular: '400',
  bold: '700',
};

export const colors = {
  main: '#FFE81F',
  mainDark: '#CFBD23',
  mainLight: '#EBDC59',
  black: '#14151D',
  gray900: '#2C2C2B',
  gray700: '#42423F',
  gray500: '#787771',
  gray300: '#908E84',
  gray100: '#B2B1AD',
  white: '#F3F3F7',
};

export const gaps = {
  xs: '0.8rem',
  sm: '1.6rem',
  md: '2.4rem',
  lg: '3.6rem',
  xl: '4.8rem',
};

export const breakpoints = {
  mobile: '360px',
  tablet: '760px',
  laptop: '1024px',
  notebook: '1360px',
  desktop: '1920px',
};

export const devices = {
  mobile: `screen and (min-width: ${breakpoints.mobile})`,
  tablet: `screen and (min-width: ${breakpoints.tablet})`,
  laptop: `screen and (min-width: ${breakpoints.laptop})`,
  notebook: `screen and (min-width: ${breakpoints.notebook})`,
  desktop: `screen and (min-width: ${breakpoints.desktop})`,
};

export const fontFamily = `"IBM plex mono", monospace`;

export const StyledWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: ${gaps.md};
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const StyledParagraph = styled("p")`
  font-size: ${fontSizes.big};
  font-weight: ${fontWeights.bold};
  text-align: center;
`;
