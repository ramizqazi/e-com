import { extendTheme } from '@chakra-ui/react';

import styles from './styles';
import textStyles from './textStyles';
import layerStyles from './layerStyles';
import fonts from './foundations/fonts';
import Card from './components/card';
import Link from './components/link';
import Button from './components/button';
import FormLabel from './components/formLabel';
import colors from './foundations/colors';

const overrides = {
  colors,
  styles,
  textStyles,
  layerStyles,
  fonts,
  components: {
    Card,
    Link,
    Button,
    FormLabel,
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
};

export default extendTheme(overrides);
