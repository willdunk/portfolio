import { Avatar, Center, Container as ChakraContainer, Spacer } from '@chakra-ui/react';
import React from 'react';
import Bio from '../../assets/content/main/bio.mdx';
import profileImage from '../../assets/images/profile.jpg';
import Links from './Links';

const Content: React.FC<{}> = () => {
  return (
    <ChakraContainer maxWidth={'container.md'} mt={2} p={2} borderRadius={8} layerStyle={'base'}>
      <Center mb={2}>
        <Avatar size='2xl' name='Will Dunkerley' src={profileImage} />
      </Center>
      <Bio />
      <Center mt={2}>
        <Links />
      </Center>
    </ChakraContainer>
  );
}

export default Content