import React from 'react';
import Link from 'next/link';
import { chakra } from '@chakra-ui/react';

interface LinkProps {
  href: string;
}

const AppLink: React.FC<LinkProps> = ({ children, href }) => {
  return (
    <Link href={href} passHref>
      <chakra.a color="theme.500" _hover={{ color: 'theme.700' }}>
        {children}
      </chakra.a>
    </Link>
  );
};

export default AppLink;
