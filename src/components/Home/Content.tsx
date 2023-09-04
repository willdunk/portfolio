import { Avatar, Center, Container as ChakraContainer, Spacer } from '@chakra-ui/react';
import React from 'react';
import Bio from '../../assets/content/Main/Bio.mdx';
import profileImage from '../../assets/images/profile.jpg';

const Content: React.FC<{}> = () => {
  return (
    <ChakraContainer maxWidth={'container.md'} mt={2} p={2} borderRadius={8} layerStyle={'base'}>
      <Center mb={2}>
        <Avatar size='2xl' name='Will Dunkerley' src={profileImage} />
      </Center>
      <Bio />
    </ChakraContainer>
  );
}

export default Content