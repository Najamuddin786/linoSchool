import {Box,Text,Flex,AspectRatio,Image,Grid} from '@chakra-ui/react'
import '../App.css'

export default function Location(){
    return <>
        <Box px={{ base: '2%', md: '8%', xl: '14%' }} my={10}>
            <Flex p={2} border={'2px dotted #feca57'} flexDir={'column'} textAlign={'center'} gap={2}>
                <Text fontSize={'2xl'} fontWeight={700}>Location</Text>
                <Text>Word No 09 ,Bettiah</Text>
                <Text>Mobile No - 8200100090</Text>
          
                <AspectRatio ratio={16 / 9}>
                    <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6059.186399773867!2d84.51076152512621!3d26.802986588775468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39936eb740976955%3A0xca8dced2374b8f95!2sAnita%20Book%20Agency!5e0!3m2!1sen!2sin!4v1718521945167!5m2!1sen!2sin' />
                </AspectRatio>
                <Text>School Photo</Text>
                <Grid templateRows={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)'}} templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)'}} gap={5} >
                <Image border={'2px solid #10ac84'} className='rotating-divScale' src='https://www.classhud.com/assets/media/uploads/listing/cover_image/national-public-higher-secondary-school.jpg'/>
                <Image border={'2px solid #10ac84'} className='rotating-divScale' h={'100%'} w={'100%'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbVl03eLkUsc0_2lJ3MPactbov1mQTIRaq8qzheSU7zuo1fvBTaMP0cPkwwTu2bA_gb4&usqp=CAU'/>
                <Image border={'2px solid #10ac84'} className='rotating-divScale' src='https://www.classhud.com/assets/media/uploads/listing/cover_image/national-public-higher-secondary-school.jpg'/>
                <Image border={'2px solid #10ac84'} className='rotating-divScale' src='https://www.classhud.com/assets/media/uploads/listing/cover_image/national-public-higher-secondary-school.jpg'/>
                </Grid>



            </Flex>
        </Box>
    </>
}