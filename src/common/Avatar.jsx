import React from 'react';
import { Image, useMediaQuery } from '@chakra-ui/react';

export default function Avatar() {
  const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px');

  return (

    <Image
      alignSelf="center"
      mt={isNotSmallerScreen ? '0' : '12'}
      mb={isNotSmallerScreen ? '0' : '12'}
      borderRadius="full"
      backgroundColor="transparent"
      boxShadow="lg"
      boxSize="300px"
      src="https://i.ibb.co/Lp182rs/mehdi.jpg"
      alt="mehdi"
      border="0"
    />
  );
}
