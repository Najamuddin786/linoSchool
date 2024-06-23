import { Box, Flex, Image, Text, Stack } from '@chakra-ui/react';
import By from './By';
import '../App.css'

export default function EventImage() {
    const image = [
        { image: 'https://stjosephbth.com/content/gallery/Infrastructure/B1.jpg', title: "Hearty Welcome, 21 July 2024" },
        { image: 'https://stjosephbth.com/content/gallery/Infrastructure/B2.jpg', title: "Annual Day, 1 March 2024" },
        { image: 'https://stjosephbth.com/content/gallery/Annual%20Day/DSC_7335.jpg', title: "Children Day, 1 Jan 2024" },
        { image: 'https://stjosephbth.com/content/gallery/Annual%20Day/DSC_8829.jpg', title: "Hearty Welcome, 21 July 2024" },
        { image: 'https://stjosephbth.com/content/gallery/Annual%20Day/DSC_7254.jpg', title: "Hearty Welcome, 21 July 2024" },
        { image: 'https://stjosephbth.com/content/gallery/Annual%20Day/DSC_7692.jpg', title: "Hearty Welcome, 21 July 2024" },
        { image: 'https://stjosephbth.com/content/gallery/Annual%20Day/DSC_7468.jpg', title: "Hearty Welcome, 21 July 2024" },
        { image: 'https://stjosephbth.com/content/gallery/Infrastructure/B1.jpg', title: "Hearty Welcome, 21 July 2024" },
    ];

    return (
        <Box>
            <By title='Our Event'/>
            <Flex 
                
                my={5} 
                align="center" 
                gap={2} 
                flexWrap="wrap" 
                justifyContent="space-around" 
                px={{ base: '2%', md: '8%', xl: '14%' }}
            >
                {image.map((ele, i) => (
                    <Box 
                        className='rotating-divScale'
                        key={i} 
                        borderRadius="xl" 
                        bg="#feca57" 
                        w={{ base: '90%', sm: '48%', md: '32%', xl: '24%' }} 
                        p={2}
                    >
                        <Image src={ele.image} borderRadius="xl" />
                        <Text  textAlign="center" mt={2}>{ele.title}</Text>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
}
