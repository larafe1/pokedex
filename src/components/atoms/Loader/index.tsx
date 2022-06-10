import { Flex, Spinner } from '@chakra-ui/react';

import { Colors } from '@/styles/theme';
import { ILoaderProps } from '@/types';

function Loader({ fullWidth }: ILoaderProps) {
  return (
    <Flex h={fullWidth ? '100vh' : '11rem'} align="center" justify="center">
      <Spinner
        thickness="5px"
        speed="0.65s"
        emptyColor="gray.100"
        color={Colors.border}
        size="xl"
      />
    </Flex>
  );
}

export default Loader;
