import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import '@/styles/globals.css';
import { PokemonsProvider } from '@/hooks/usePokemons';
import { customTheme } from '@/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <PokemonsProvider>
        <Component {...pageProps} />
      </PokemonsProvider>
    </ChakraProvider>
  );
}

export default MyApp;
