// Overriding Chakra UI variables

import { extendTheme } from '@chakra-ui/react';

const theme = {
  styles: {
    global: {
      'fieldset + fieldset': {
        marginTop: '1em',
      },
    },
  },
  fonts: {
    body: 'Titillium Web, Helvetica, Arial, sans-serif',
    heading: 'Titillium Web, Helvetica, Arial, sans-serif',
    mono: 'monospace',
  },
  fontWeights: {
    normal: 400,
    regular: 400,
    semibold: 600,
    bold: 700,
  },
  colors: {
    gradient:
      'linear-gradient(135deg, hsla(312, 100%, 50%, 1) 0%, hsla(240, 50%, 40%, 1) 100%)',
    theme: {
      50: '#EBB8F5',
      100: '#E094F0',
      200: '#D670EB',
      300: '#CC4CE6',
      400: '#C229E0',
      500: '#A81CC4',
      600: '#9018A8',
      700: '#78148C',
      800: '#601070',
      900: '#540E62',
    },
  },
};

const customTheme = extendTheme(theme);

export default customTheme;
