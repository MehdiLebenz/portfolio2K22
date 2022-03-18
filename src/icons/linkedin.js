/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/react';

function Linkedin() {
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton icon={<FaLinkedin />} isRound="true" onClick={toggleColorMode}>    </IconButton>

  );
}

export default Linkedin;
