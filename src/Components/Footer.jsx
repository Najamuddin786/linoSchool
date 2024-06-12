import {Box,Flex,Spacer,Text,Image} from '@chakra-ui/react'
import{Link} from 'react-router-dom'
import linoSchool from '../assets/linoSchool.png'
export default function Footer(){

    return <>
            
    <Flex flexDirection={'column'} align={'center'}  color={'white'} h={'10rem'}>
      <Flex flexDir={'column'} p={2} px={{ base: '2%', md: '8%', xl: '14%' }} bgColor={'#10ac84'} h={'130%'} w={'100%'} justifyContent={'center'} alignItems={'center'}>
        {/* Content for the first Flex component */}
        {/* <Flex align={'center'}> */}
        <Link to={'/home'}>
          <Image w={'4.8rem'} src={linoSchool} alt="Lino School Logo" />
        </Link>
        <Link to={'/home'}>
          <Text color={'#feca57'} fontSize={{ base: '1.5rem', md: '2rem' }} fontWeight={700}>
            <span style={{ color: 'white', marginRight: '-5px' }}>Lino</span> School
          </Text>
        </Link>
      {/* </Flex> */}
        <Text>Mo No - 821094293</Text>
        <Text>Email I'D- linoschool@gmail.com</Text>
      </Flex>
      <Flex py={2} flexDirection={{base:'column',sm:'row'}} textAlign={'center'} px={{ base: '2%', md: '8%', xl: '14%' }} bgColor={'black'} h={{base:"60%",sm:'40%'}} w={'100%'} justifyContent={'center'} alignItems={'center'}>
        {/* Content for the second Flex component */}
        <Text>Copyright © LinoSchool 2024</Text><Spacer/><Text>Devlop By - LinoSchool 8210942893</Text>
      </Flex>
    </Flex>



    </>
}