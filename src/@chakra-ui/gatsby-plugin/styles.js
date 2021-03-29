import { mode } from '@chakra-ui/theme-tools';
import { nodeModuleNameResolver } from 'typescript';

const styles = {
  global: (props) => ({
    body: {
      color: mode('color', 'dark.color')(props),
      bg: mode('bg', 'dark.bg')(props),
    },
    // non-chakra elements styles
    '#blog-content': {
      fontSize: '1em',
      fontWeight: 'normal',
      fontFamily: 'system-ui, sans-serif',
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
