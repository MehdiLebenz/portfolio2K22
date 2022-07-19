import React from 'react';
import { useMediaQuery, Flex } from '@chakra-ui/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import renault from '../../../images/Renault.png';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Renault() {
  const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px');

  return (
    <Flex rounded="xl" ml={isNotSmallerScreen ? 4 : 0} direction="column" mt={4} bg="white" h="21vh" w="21vh" justify="center" _hover={{ bg: 'gray.700' }}>
      <LazyLoadImage
        alt="abc"
        effect="blur"
        src={renault}
        style={{
          width: '70%',
          height: 'auto',
          marginLeft: 'auto',
          marginRight: 'auto',
          objectFit: 'cover',

        }}
      />

    </Flex>
  );
}

export default Renault;
