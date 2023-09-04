import { Flex } from '@chakra-ui/react';
import React from 'react';

const Container: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Flex
      minH="100vh"
      flexDir="column"
      layerStyle={'background'}
    >
      {children}
    </Flex>
  );
}

export default Container;