import { mode } from '@chakra-ui/theme-tools';
import { nodeModuleNameResolver } from 'typescript';

const styles = {
  global: (props) => ({
    body: {
      color: mode('color', 'dark.color')(props),
      bg: mode('bg', 'dark.bg')(props),
    },
    ul: {
      listStyle: 'none',
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
