import {Box,Flex,Spacer,Text,Image, Container} from '@chakra-ui/react'
import By from './By'
import{Link} from 'react-router-dom'
import linoSchool from '../assets/linoSchool.png'
import '../App.css'
export default function Approve(){

    return <>
            
   
      <Flex my={'10'} flexDir={'column'} p={2} px={{ base: '2%', md: '8%', xl: '14%' }}  h={'130%'} w={'100vw'} justifyContent={'center'} alignItems={'center'}>
        
        <By title="Approve"/>
        <Flex className='rotating-divScale' w={'90%'} px={10} py={2} border={'2px dotted #10ac84'} gap={{base:'5px',sm:10}} align={'center'} justifyContent={'start'}>
          <Image w={{base:'50px',sm:'100px',md:'150px'}} src='https://yt3.googleusercontent.com/ytc/AIdro_lN_zzsz2u-aetw4UuV1ADMSrW_8LrwZKgW8IyofDLsS6g=s900-c-k-c0x00ffffff-no-rj'/>
          
          <Text textDecoration={'underline'} fontSize={'xl'}>Registration Number : 1800-2700-99000</Text>
        </Flex>
        <Flex className='rotating-divScale' my={5} w={'90%'} px={10} py={2} border={'2px dotted #10ac84'} gap={{base:'5px',sm:10}} align={'center'} justifyContent={'start'}>
          <Image w={{base:'50px',sm:'100px',md:'150px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUuHu1IqosY39oXM2aTRNClIeVY-AdJJBluQ&usqp=CAU'/>
          
          <Text textDecoration={'underline'} fontSize={'xl'}>Registration Number : 1800-2700-99000</Text>
        </Flex>

       
    
      </Flex>
 



    </>
}