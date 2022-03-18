/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/react';

function Github() {
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton ml={2} icon={<FaGithub />} isRound="true" onClick={toggleColorMode}>    </IconButton>

  );
}

export default Github;
