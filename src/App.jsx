/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
import {
  Flex, Heading, Spacer, useColorMode, VStack, Divider,
} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/button';
import {
  FaSun, FaMoon, FaGithub, FaLinkedin,
} from 'react-icons/fa';
import Header from './components/header/Header';
import Social from './components/social/Social';
import Profil from './components/profil/profil';
import Project from './components/projects/project';
import Footer from './components/footer/footer';
import Timeline from './components/timeline/timeline';
import Medium from './components/blog/medium';

function App() {
  // implement Color Mode / Dark Mode
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="orange.400"> I have no special talent .. " Albert Einstein "</Heading>

        <Spacer />
        {/* Color Mode implementation  */}
        <IconButton icon={<FaLinkedin />} isRound="true" onClick={() => window.open('https://www.linkedin.com/in/mehdi-benzarti-pal-ebm%E2%84%A2-psm-i%E2%84%A2-pspo-i%E2%84%A2-pal-i%E2%84%A2-307bb2121')}>    </IconButton>
        <IconButton ml={2} icon={<FaGithub />} isRound="true" onClick={() => window.open('https://github.com/MehdiLebenz')}>    </IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode} />
      </Flex>
      <Header />
      <Social />
      <Profil />
      <Divider orientation="horizontal" />
      <Project />
      <Divider orientation="horizontal" />
      <Medium />
      <Divider orientation="horizontal" />
      <Timeline />
      <Footer />
    </VStack>
  );
}

export default App;
