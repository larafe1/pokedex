import { Box } from '@chakra-ui/react';

import PokedexButton from '@/components/atoms/PokedexButton';
import { palette } from '@/styles/theme';

function MenuBar() {
  return (
    <Box
      h="55px"
      w="100%"
      position="fixed"
      zIndex="1"
      d="flex"
      alignItems="center"
      bg={palette.lightRed}
      boxShadow="0 10px 10px rgba(0, 0, 0, 0.1)"
    >
      <PokedexButton />
    </Box>
  );
}

export default MenuBar;
