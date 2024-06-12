import {Box, Container,Text,Flex} from '@chakra-ui/react'

export default function By(props){

    return <>
            

            <Flex my={'10'} flexDir={'column'} p={2} px={{ base: '2%', md: '8%', xl: '14%' }}  h={'130%'} w={'100%'} justifyContent={'center'} alignItems={'center'}>
        {/* Content for the first Flex component */}
        {/* <Flex align={'center'}> */}
        <Box><Container><Text bgColor={'#10ac84'} py={1} px={'5'} borderRadius={'sm'} color={'white'} fontSize={'xl'} fontWeight='700'>Approvel By</Text></Container></Box>

    
      </Flex>


    </>
}