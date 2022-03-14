import { Stack,Circle, useColorMode, useMediaQuery, Flex, Box, Text, Button } from '@chakra-ui/react'
import React from 'react'
import Avatar from '../../common/Avatar';


export default function Header() {
    const {coloMode} = useColorMode();
    const isDark = coloMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px");

  return (
    <div>
        <Stack>
            <Circle position="absolute" bg="orange.400" opacity="0.1" 
            w="300px" h="300px" alignSelf="flex-end"/>
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
            spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
            alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight='semibold'>Hi I am </Text>
                    <Text fontSize="6xl" fontWeight='bold' bgGradient="linear(to-r, orange.100, orange.400, orange.700)" bgClip='text'>Mehdi Benzarti </Text>
                    <Text color={isDark ? "gray.200" : 'GrayText.500'}> Managing Director - Senior Project Manager  at @Altavia since 2k18 <br/> React enthusiast ❤️ </Text>
                    <Button mt={8} colorScheme='orange' onClick={() => window.open("")}>
                    Hire Me
                    </Button>
                </Box>
            <Avatar/>



            </Flex>


            
        </Stack>

    </div>
  )
}
