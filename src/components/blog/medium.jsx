/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import {
  useMediaQuery, Flex, Box, Text, Heading,
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
        base: '100vh', md: '130vh', lg: '130vh', xl: '',
      }}
    >
      <Box alignSelf="center" px="" py="16">
        <Heading fontWeight="extrabold" color="orange.400" size="4xl">
          4+
        </Heading>
        <Text fontSize="2xl" color="gray.400">Publications </Text>
      </Box>
      <Box px="32" py="16">
        <Text fontSize="2xl" color="gray.400">
          {isLoading && <p>Fetching data from Medium!</p>}
          {' '}
        </Text>
      </Box>
      {finalData.map((article) => (
        <Box alignSelf="center" px="32" py="16" p={8}>
          <Text
            fontWeight="bold"
            fontSize="xl"
            textAlign="center"
          >
            {article.author}
          </Text>
          <Flex direction={isNotSmallerScreen ? 'column' : 'column'} mt={8}>
            <a
              href={article.link}
              style={{
                textAlign: 'center',
              }}
            >
              {' '}
              {article.title}
            </a>
            <Flex rounded="xl" ml={isNotSmallerScreen ? 4 : 0} direction="column" mt={4} bg="white" h="21vh" w="21vh" justify="center" _hover={{ bg: 'gray.700' }}>
              <LazyLoadImage
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
        </Box>
      ))}
    </Flex>

  );
};
export default Fetchdata;
