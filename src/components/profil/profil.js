import React from 'react'
import {useMediaQuery, Flex, Box, Heading, Text, Image} from '@chakra-ui/react';
import ebm from '../../images/certification/ebm.png'
import pspoi from '../../images/certification/pspoi.png'
import psmi from '../../images/certification/psmi.png'
import Counter from '../../common/counter'
export default function Profil() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px");

  return (
        <Flex direction ={isNotSmallerScreen ? "row" : "column"} w="100%" 
        maxWidth={{base:"100vh", md:"130vh", lg:"130vh", xl:"150vh"}}>
        <Box alignSelf="center" px="127" py="16" >
            <Heading fontWeight="extrabold" color="orange.400" size="4xl">
            <Counter number={11} />
                </Heading> 
                
                <Text fontSize="2xl" color="gray.400">Years of Experience </Text>
        </Box>
        <Box alignSelf="center" px="29" py="16">
            <Text fontWeight="bold" fontSize="2xl" textAlign="center"> Certifications </Text>
            <Flex direction={isNotSmallerScreen ? "row" : 'column'} mt={8}>
                <Flex rounded="xl" direction="column" mt={4} bg="blue.600" h="21vh" w="21vh" justify="flex-end" _hover={{bg:'gray.700'}}>
                <Image src={pspoi} ml='auto' mr='auto'  boxSize='100px' objectFit='cover' alt='pal' />
                    <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                        PSM 1
                        </Text>

                </Flex>
                <Flex rounded="xl" ml={isNotSmallerScreen ? 4 : 0}direction="column" mt={4} bg="white" h="21vh" w="21vh" justify="flex-end" _hover={{bg:'gray.400'}}>
                <Image src={psmi}    ml='auto' mr='auto'  boxSize='100px' objectFit='cover' alt='pal' />
                    <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                        PSPO 1
                        </Text>

                </Flex>
                <Flex rounded="xl" ml={isNotSmallerScreen ? 4 : 0}direction="column" mt={4} bg="white" h="21vh" w="21vh" justify="flex-end" _hover={{bg:'gray.400'}}>
                    <Image src={ebm}    ml='auto' mr='auto'  boxSize='100px' objectFit='cover' alt='pal' />
                    <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                        PAL EBDM
                        </Text>

                </Flex>
                <Flex rounded="xl" ml={isNotSmallerScreen ? 4 : 0}direction="column" mt={4} bg="white" h="21vh" w="21vh" justify="flex-end" _hover={{bg:'gray.400'}}>
                    <Image src={ebm}    ml='auto' mr='auto'  boxSize='100px' objectFit='cover' alt='pal' />
                    <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                        PAL EBDM
                        </Text>

                </Flex>
            </Flex>
            
        </Box>
        </Flex>
  )
}
