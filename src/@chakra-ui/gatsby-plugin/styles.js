import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      color: mode('color', 'dark.color')(props),
      bg: mode('bg', 'dark.bg')(props),
      fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
    },
    // non-chakra elements styles
    '#blog-content': {
      fontWeight: 'normal',
      lineHeight: '2em',
    },
    '#blog-content p': {
      marginBottom: '1.5em',
    },
    '#blog-content ol': {
      listStylePosition: 'inside',
    },

    '[data-skip-to-content]': {
      clip: 'rect(0 0 0 0)',
      '&:focus': {
        clip: 'auto',
      },
    },
  }),

};

export default styles;
