import { extendTheme } from '@chakra-ui/react';

const theme = {
  config: {
    intialColorMode: 'dark',
    useSystemColorMode: true,
  },
  styles: {
    global: {
      body: {
        margin: 0,
      },
    },
  },
};

export default extendTheme(theme);
