import React from 'react';
import {
  useMediaQuery, Flex, Box, Heading, Text,
} from '@chakra-ui/react';
import Porsche from './projectsList/Porsche';
import Lactalis from './projectsList/Lactalis';
import Vyv from './projectsList/vyv';
import Hyperspread from './projectsList/hyperspread';
import Renault from './projectsList/renault';
import Carrefour from './projectsList/carrefour';
import Lacoste from './projectsList/lacoste';
import Vgf from './projectsList/vgf';
import Sagilea from './projectsList/sagilea';

export default function Project() {
  const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px');
  return (
    <Flex
      direction={isNotSmallerScreen ? 'row' : 'column'}
      w="100%"
      maxWidth={{
        base: '100vh', md: '130vh', lg: '130vh', xl: '150vh',
      }}
    >
      <Box alignSelf="center" px="75" py="16">
        <Heading fontWeight="extrabold" color="orange.400" size="4xl">
          14+
        </Heading>
        <Text fontSize="2xl" color="gray.400">WebSites </Text>
      </Box>
      <Box alignSelf="center" px="55" py="16">
        <Text fontWeight="bold" fontSize="2xl" textAlign="center">Projects managed  </Text>
        <Flex direction={isNotSmallerScreen ? 'row' : 'column'} mt={8}>
          <Hyperspread />
          <Renault />
          <Vyv />
          <Carrefour />
          <Sagilea />
        </Flex>
        <Flex direction={isNotSmallerScreen ? 'row' : 'column'} mt={8}>
          <Lacoste />
          <Lactalis />
          <Porsche />
          <Vgf />
        </Flex>
        <Flex direction={isNotSmallerScreen ? 'row' : 'column'} mt={8} />
      </Box>

    </Flex>
  );
}
