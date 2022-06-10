import { extendTheme } from '@chakra-ui/react';

export const Colors = {
  shape: '#fff',
  text: 'blue',
  background: '#fafafa',
  lightGray: '#f8fafc',
  border: '#0000001a'
};

export const BoxShadow = {
  default: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
  pink: 'rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px',
  rainbow:
    'blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px'
};

export const customTheme = extendTheme({
  styles: {
    global: {
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
      },
      'html, body': {
        bgColor: Colors.background,
        color: Colors.text,
        lineHeight: 0
      }
    }
  },
  fonts: {
    body: 'Montserrat'
  }
});
