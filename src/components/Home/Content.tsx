import { Container as ChakraContainer } from '@chakra-ui/react';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const Content: React.FC<{}> = () => {
  return (
    <ChakraContainer maxWidth={'container.md'} layerStyle={'base'}>
      <ReactMarkdown>
        {"asdf"}
      </ReactMarkdown>
    </ChakraContainer>
  );
}

export default Content