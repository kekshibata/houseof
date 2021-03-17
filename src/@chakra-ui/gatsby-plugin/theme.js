// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';
import { createBreakPoints } from '@chakra-ui/theme-tools';

// Container
import Container from './components/container';

// Global Styles
import styles from './styles';

// foundations
import sizes from './foundations/sizes';
import colors from './foundations/colors';

// custom breakpoints
breakpoints = createBreakPoints({
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
});

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  styles,
  space: sizes,
  sizes,
  colors,
  components: {
    Container,
  },
  breakpoints,
  config,
});

export default theme;
