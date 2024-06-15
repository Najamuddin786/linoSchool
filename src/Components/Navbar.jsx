import { Box, Flex, Spacer, Image, Text } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import linoSchool from '../assets/linoSchool.png';
import Slider from './Slider';

export default function Navbar() {
  const navbar = [
    {
      label: 'Home',
      to: '/home',
    },
    {
      label: 'Contact',
      to: '/contact',
    },
    {
      label: 'About',
      to: '/about',
    },
    {
      label: 'Faculty',
      to: '/faculty',
    },
  ];
  const [hamburger, setHamburger] = useState(false);

  return (
    <>
    <Flex zIndex={1000} position={'sticky'} top={'0px'} align={'center'} px={{ base: '2%', md: '8%', xl: '14%' }} bg={'#10ac84'} color={'white'} h={'4rem'}>
      <Flex align={'center'}>
        <Link to={'/home'}>
          <Image w={'4.8rem'} src={linoSchool} alt="Lino School Logo" />
        </Link>
        <Link to={'/home'}>
          <Text color={'#feca57'} fontSize={{ base: '1.5rem', md: '2rem' }} fontWeight={700}>
            <span style={{ color: 'white', marginRight: '-5px' }}>Lino</span> School
          </Text>
        </Link>
      </Flex>
      <Spacer />
      <Flex align={'center'} fontSize={'20px'}>
        <Flex gap={2} display={{ base: 'none', sm: 'flex' }}>
          {navbar.map((ele, i) => (
            <Link to={ele.to} key={i}>
              <Text>{ele.label}</Text>
            </Link>
          ))}
        </Flex>
        <Box
          onClick={() => setHamburger(!hamburger)}
          mt={'-10px'}
          fontSize={'2.5rem'}
          display={{ sm: 'none' }}
        >
          <HamburgerIcon />
        </Box>
      </Flex>
      {hamburger && (
        <Flex 
          position={'fixed'}
          left={'0px'}
          top={'0'}
          mt={'4rem'}
          bg={'#10ac84'}
          gap={5}
          p={2}
          flexDirection={'column'}
          w={'100%'}
          h="calc(100vh - 4rem)"
          fontSize={'20px'}
          zIndex={10}
        >
          {navbar.map((ele, i) => (
            <Link to={ele.to} key={i} onClick={() => setHamburger(false)}>
              <Text>{ele.label}</Text>
            </Link>
          ))}
          <Box color={"#feca57"} textAlign={'center'}  position={'absolute'} bottom={'250px'} left={'50px'}><h1 style={{textAlign:'center'}}>Best School In the Bettiah</h1></Box>
        </Flex>
        
      )}
    </Flex>
    <Slider/>
    <Link><Text className='blinking-text' zIndex={1100} bg={'#10ac84'} fontWeight={700} p={1} borderRadius={'20px 20px 0px'} borderBottom={'4px solid #feca57'} color={'white'} position={'fixed'} top='45vh' right={'0px'}>Admission Open</Text></Link>
    </>
  );
}
