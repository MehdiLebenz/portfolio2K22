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
      src="https://pbs.twimg.com/profile_images/1129387769468526592/aa5-T0H6_400x400.jpg"
    />
  );
}
