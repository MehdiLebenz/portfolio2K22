import React from 'react'
import {useMediaQuery, Flex} from '@chakra-ui/react';
import porsche from '../../../images/porsche.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function Porsche() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px");

  return (
    <Flex rounded="xl" ml={isNotSmallerScreen ? 4 : 0}direction="column" mt={4} bg="white" h="21vh" w="21vh" justify="center" _hover={{bg:'gray.700'}}>
   
          <LazyLoadImage
    alt='abc'
    effect="blur"
    src={porsche}
    style={{
      width : '50%',
      height: 'auto',
      marginLeft:'auto',
      marginRight: 'auto',
      objectFit: 'cover'

    }} />

    </Flex>
  )
}

export default Porsche