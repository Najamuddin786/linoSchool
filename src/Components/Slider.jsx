import { Box, Image, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Slider() {
  const images = [
    {
      img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2Nob29sJTIwdGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D',
      title: 'LinoSchool is the best school in Bettiah',
    },
    {
      img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sfGVufDB8fDB8fHww',
      title: 'LinoSchool has a beautiful campus with lots of greenery and a big playground.',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661905921900-a8b49e65feeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNjaG9vbCUyMGJvb2t8ZW58MHwwfDB8fHww',
      title: '"Self-efficacy" by giving students belief in their abilities.',
    },
    {
      img: 'https://images.unsplash.com/photo-1580063665762-762002ea39d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHNjaG9vbCUyMGJvb2t8ZW58MHwwfDB8fHww',
      title: '"Common purpose" by giving students, families, and teachers common values.',
    },
  ];

  const [url, setUrl] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setUrl((prevUrl) => (prevUrl === images.length - 1 ? 0 : prevUrl + 1));
    }, 1500);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <Flex
      zIndex={1}
      position={'relative'}
      w={'100vw'}
      h={{ base: '35vh', sm: '55vh', md: '80vh' }}
      bg={'gray'}
    >
      <Box>
        <Image w={'100vw'} h={'100%'} src={images[url].img} alt="School" />
      </Box>
      <Flex
        justifyContent={'center'}
        align={'center'}
        bg={'rgba(255, 255, 255, 0.7)'}
        fontWeight={'700'}
        color={'#10ac84'}
        fontSize={{ base: '10px', sm: '24px', md: 'xl', xl: '2xl' }}
        position={'absolute'}
        top={'40%'}
        w={'100%'}
        textAlign={'center'}
      >
        <Text>{images[url].title}</Text>
      </Flex>
      <Flex
        zIndex={1}
        py={5}
        px={2}
        flexDirection={'column'}
        fontWeight={'700'}
        color={'black'}
        fontSize={{ base: '10px', sm: '24px', md: 'xl', xl: '2xl' }}
        position={'absolute'}
        top={0}
        left={0}
      >
        <Text>“शिक्षा ही सबसे महत्वपूर्ण है!”</Text>
        <Text>(शिक्षा सबसे महत्वपूर्ण है!) "ज्ञान से बढ़े भारत,</Text>
      </Flex>
      <Flex
        zIndex={1}
        py={5}
        px={2}
        flexDirection={'column'}
        fontWeight={'700'}
        color={'white'}
        fontSize={{ base: '10px', sm: '24px', md: 'xl', xl: '2xl' }}
        position={'absolute'}
        bottom={0}
        right={0}
        textAlign={'right'}
      >
        <Text>शिक्षा ही हमारा अधिकार!" (ज्ञानवान भारत, शिक्षा हमारा अधिकार!)</Text>
        <Text>“पढ़ो और प्रगति करो!” (अध्ययन और प्रगति!)</Text>
      </Flex>
    </Flex>
  );
}
