import {Box,Text,Flex} from '@chakra-ui/react'
import By from './By'
import "../App.css"

export default function Result(){
    let result=[
        {
            name:"Mohan Kumar",
            math:85,
            english:90,
            s:92,
            san:80,
            hindi:90,
            sc:95,
        },
        {
            name:"Ramesh Kumar",
            math:80,
            english:89,
            s:99,
            san:80,
            hindi:70,
            sc:95,
        },
        {
            name:"Danish Alam",
            math:80,
            english:89,
            s:99,
            urdu:80,
            hindi:70,
            sc:95,
        },
        {
            name:"Hamid Akbal",
            math:80,
            english:89,
            s:99,
            urdu:90,
            hindi:70,
            sc:95,
        },
        {
            name:"Pawan Kumar",
            math:80,
            english:89,
            s:99,
            san:80,
            hindi:70,
            sc:95,
        },
        {
            name:"Privin Yadav",
            math:85,
            english:90,
            s:92,
            san:80,
            hindi:90,
            sc:95,
        },
        {
            name:"Dinesh Yadav",
            math:80,
            english:89,
            s:99,
            san:80,
            hindi:70,
            sc:95,
        },
        {
            name:"Privin Yadav",
            math:85,
            english:90,
            s:92,
            san:80,
            hindi:90,
            sc:95,
        },
        {
            name:"Sumita Kumari",
            math:85,
            english:90,
            s:92,
            san:80,
            hindi:90,
            sc:95,
        },
        {
            name:"Parvaz Alam",
            math:85,
            english:90,
            s:92,
            urdu:80,
            hindi:90,
            sc:95,
        },
    ]
    return <>
        <Box mt={20} bg={'#FFF5C4'} pb={10} pt='5' px={{ base: '2%', md: '8%', xl: '14%' }}>
            <By title='Last Year Result 10th'/>
            <Flex textAlign={'center'} fontSize={{base:'12px',sm:'14px',md:'20px'}} p={1} justifyContent={'space-between'} bg={'#10ac84'} flexDir={'column'} border={'1px solid black'}>
                <Flex className='rotating-divScale' fontWeight={600} bg={'#feca57'} border={'1px solid black'}><Text borderRight={'1px solid black'} w={'20%'}>Name</Text>
                    <Text borderRight={'1px solid black'} w={'10%'}>English</Text>
                    <Text borderRight={'1px solid black'} w={'10%'}>Hindi</Text>
                    <Text borderRight={'1px solid black'} w={'10%'}>Math</Text>
                    <Text borderRight={'1px solid black'} w={'10%'}>Urdu</Text>
                    <Text borderRight={'1px solid black'} w={'10%'}>Sanskrit</Text>
                    <Text borderRight={'1px solid black'} w={'10%'}>S.S</Text>
                    <Text borderRight={'1px solid black'} w={'10%'}>Science</Text>
                    <Text borderRight={'1px solid black'} w={'10%'}>Total/600</Text>
                </Flex>
                
                {result?.map((ele,i)=>{
                    let Total=+ele['english']+ele['hindi']+ele["math"]+ele["s"]+ele["sc"];
                    if(ele['urdu']){
                        Total+=ele['urdu']
                    }else{
                        Total+=ele['san']
                    }
                    return <Flex className='rotating-divScale' border={'1px solid black'} key={i}  justifyContent={'space-between'}>
                            <Text borderRight={'1px solid black'} w={'20%'} bg={'#feca57'}>{ele.name}</Text>
                            <Text borderRight={'1px solid black'} w={'10%'}>{ele.english}</Text>
                            <Text borderRight={'1px solid black'} w={'10%'}>{ele.hindi}</Text>
                            <Text borderRight={'1px solid black'} w={'10%'}>{ele.math}</Text>
                            <Text borderRight={'1px solid black'} w={'10%'}>{ele?.urdu}</Text>
                            <Text borderRight={'1px solid black'} w={'10%'}>{ele?.san}</Text>
                            <Text borderRight={'1px solid black'} w={'10%'}>{ele.s}</Text>
                            <Text borderRight={'1px solid black'} w={'10%'}>{ele.sc}</Text>
                            <Text borderRight={'1px solid black'} w={'10%'}>{Total}</Text>
                    </Flex>
                })}
            </Flex>


        </Box>
    </>

}