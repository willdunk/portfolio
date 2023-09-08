import React, { useMemo } from 'react';
import { Alert, AlertIcon, Container as ChakraContainer } from '@chakra-ui/react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Spinner } from '@chakra-ui/react'
import useGet from '../../hooks/get';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

const Post: React.FC<{ source: string | undefined }> = ({ source }) => {
  const { data, loading, error } = useGet(source ?? '', { responseType: "text" } as const);

  return (
    <ChakraContainer maxWidth={'container.lg'} mt={2} p={2} borderRadius={8} layerStyle={'content'}>
      {loading ? <Spinner /> : null}
      {error ? <Alert status='error'>
        <AlertIcon />
        {`Could not fetch ${source}`}
      </Alert> : null}
      {!loading && !error && data ? <ReactMarkdown components={ChakraUIRenderer()} skipHtml>
        {data}
      </ReactMarkdown> : null}
    </ChakraContainer>
  );
}

export default Post;