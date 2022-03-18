import { HStack, Icon } from '@chakra-ui/react';
import React from 'react';
import { FaGoogle, FaGithub, FaMedium } from 'react-icons/fa';

export default function Social() {
  return (
    <HStack spacing="24">
      <Icon as={FaGoogle} boxSize="50" onClick={() => window.open('https://form.typeform.com/to/NhpB4xUw')} />
      <Icon as={FaGithub} boxSize="50" onClick={() => window.open('https://github.com/MehdiLebenz')} />
      <Icon as={FaMedium} boxSize="50" onClick={() => window.open('https://mehdilebenz.medium.com/')} />
    </HStack>
  );
}
