import { Flex, Container } from '@chakra-ui/react';
import React from 'react';

const content = `I'm Will, a New York City-based software engineer. My journey began at Stevens Institute of Technology, where I earned a BS in Computer Science. I specialize in Typescript, Javascript, Python, and React, with a passion for crafting software that resonates with users.\n\nMy approach is simple: I love building things that people use and care about. Whether it's web applications, user interfaces, or backend systems, I'm dedicated to creating solutions that make a real impact. Beyond that, I'm on a constant quest to improve my skills, staying at the forefront of technology to ensure I deliver the best results. Let's connect and turn your ideas into reality, together.`

const Content: React.FC<{}> = () => {
  return (
    <Flex
      minH="100vh"
      flexDir="column"
      layerStyle={'background'}
    >
      <Container maxWidth={'md'} layerStyle={'base'}>
        {content}
      </Container>
    </Flex>
  );
}

export default Content