import React from 'react';
import {
  Box,
  chakra,
  Flex,
  IconProps,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import {
  BiBuildings,
  BiCog,
  BiGroup,
  BiHive,
  BiHomeAlt,
  BiIdCard,
  BiUser,
} from 'react-icons/bi';
import Link from 'next/link';

interface MenuItemProps {
  id: string;
  label: string;
  href: string;
  icon: IconProps;
}

const menu: MenuItemProps[] = [
  {
    id: 'dashboard',
    label: 'Página inicial',
    href: '/dashboard',
    icon: <BiHomeAlt size="18" />,
  },
  {
    id: 'colaboradores',
    label: 'Colaboradores',
    href: '/colaborador',
    icon: <BiUser size="18" />,
  },
  {
    id: 'kanban',
    label: 'Equipes',
    href: '/equipe',
    icon: <BiGroup size="18" />,
  },
  {
    id: 'reunioes',
    label: 'Cargos',
    href: '/cargo',
    icon: <BiIdCard size="18" />,
  },
  {
    id: 'avcorp',
    label: 'Setores',
    href: '/setor',
    icon: <BiHive size="18" />,
  },
  {
    id: 'unidades',
    label: 'Unidades',
    href: '/unidade',
    icon: <BiBuildings size="18" />,
  },
];

const Navbar: React.FC = () => {
  return (
    <Box height="100%" padding="20px 10px 20px 20px">
      <Flex
        direction="column"
        justify="space-between"
        height="100%"
        width="250px"
        borderRadius="md"
        bgColor="gray.50"
      >
        <List spacing={0} width="100%" padding="10px">
          {menu.map(item => (
            <ListItem key={item.id} padding="0">
              <Link href={item.href} passHref>
                <chakra.a
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  fontWeight="semibold"
                  padding="12px"
                  borderRadius="md"
                  _hover={{ color: 'theme.500', backgroundColor: 'gray.100' }}
                >
                  <Text lineHeight={1} fontSize="md" fontWeight="semibold">
                    {item.label}
                  </Text>
                  {item.icon}
                </chakra.a>
              </Link>
            </ListItem>
          ))}
        </List>

        <List spacing={0} width="100%" padding="10px">
          <ListItem padding="0">
            <Link href="/configuracoes" passHref>
              <chakra.a
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                fontWeight="semibold"
                padding="12px"
                borderRadius="md"
                _hover={{ color: 'theme.500', backgroundColor: 'gray.100' }}
              >
                <Text lineHeight={1} fontSize="md" fontWeight="semibold">
                  Configurações
                </Text>
                <BiCog />
              </chakra.a>
            </Link>
          </ListItem>
        </List>
      </Flex>
    </Box>
  );
};

export default Navbar;
