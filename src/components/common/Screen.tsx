import React from 'react';
import Container from './Container';

const Screen: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    // This is where you can place things like universal layout things that will be on every screen
    <Container>
      {children}
    </Container>
  );
}

export default Screen;