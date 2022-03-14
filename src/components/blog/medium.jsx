/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import {
  useMediaQuery, Flex, Box, Heading, Text,
} from '@chakra-ui/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Fetchdata = function Fetchdata() {
  const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px');
  const [mediumData, setMediumData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mehdilebenz')
      .then((res) => res.json())
      .then((response) => {
        setMediumData(response.items);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const finalData = mediumData.slice(0, 10);

  return (
    <Flex
      direction={isNotSmallerScreen ? 'row' : 'column'}
      w="100%"
      maxWidth={{
        base: '100vh', md: '130vh', lg: '130vh', xl: '150vh',
      }}
    >
      <Box alignSelf="center" px="127" py="16">
        <Heading fontWeight="extrabold" color="orange.400" size="4xl">
          9+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          {isLoading && <p>Fetching data from Medium!</p>}
          {' '}
        </Text>
      </Box>
      {finalData.map((article) => (
        <Box alignSelf="center" px="127" py="16">
          <Text fontWeight="bold" fontSize="2xl" textAlign="center">Medium Articles </Text>
          <Flex direction={isNotSmallerScreen ? 'row' : 'column'} mt={8}>
            <Text>
              {' '}
              {article.title}
            </Text>
            <Flex rounded="xl" ml={isNotSmallerScreen ? 4 : 0} direction="column" mt={4} bg="white" h="21vh" w="21vh" justify="center" _hover={{ bg: 'gray.700' }}>
              <LazyLoadImage
                href={article.link}
                alt="abc"
                effect="blur"
                src={article.thumbnail}
                style={{
                  width: 'auto',
                  height: 'auto',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  objectFit: 'cover',

                }}
              />

            </Flex>

          </Flex>
          <Flex direction={isNotSmallerScreen ? 'row' : 'column'} mt={8} />
          <Flex direction={isNotSmallerScreen ? 'row' : 'column'} mt={8} />

        </Box>
      ))}
    </Flex>

  );
};
export default Fetchdata;
