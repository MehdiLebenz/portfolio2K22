import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer  ()  {
    return(
  <Container as="footer" role="contentinfo" py={{ base: '2', md: '1' }}>
    <Stack spacing={{ base: '4', md: '15' }}>
      <Stack justify="space-between" direction="column" align="center">
        <ButtonGroup variant="ghost" justify="flex-end">
          <IconButton
            color='orange.400'
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton color='orange.400' as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
         
        </ButtonGroup>
      </Stack>
      <Text fontSize="1xl" color="subtle" direction="column" align="center" >
        &copy; {new Date().getFullYear()} Mehdi Benzarti. All rights reserved | | made with love from 🇹🇳
      </Text>
    </Stack>
  </Container>
)}