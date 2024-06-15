import { Box, Flex, Image, Input, Text, Textarea, Button } from '@chakra-ui/react';
import { PhoneIcon } from "@chakra-ui/icons";
import contact from '../assets/contact.png';
import '../App.css';
import { useState, useEffect, useRef } from 'react';

export default function Contact() {
    let [user, setUser] = useState({ name: '', number: '', message: '' });
    const nameInputRef = useRef(null);

    useEffect(() => {
        nameInputRef.current.focus();
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(user);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box px={{ base: '2%', md: '8%', xl: '14%' }}>
                    <Flex gap={10} align={'center'} flexDir={'column'} my={20} bg={'#BAFFEF'} p={'5'} py={'50px'} justifyContent={'space-between'}>
                        <Flex justifyContent={'center'}>
                            <Text className='rotating-divScale' fontWeight={700} borderRadius={'100px'} cursor={'pointer'} bg='#feca57' color={'#5f27cd'} py={2} px={5}>
                                Call <PhoneIcon color={'#10ac84'} /> : 8200920010
                            </Text>
                        </Flex>
                        <Flex justifyContent={'space-around'} flexDir={{ base: 'column', xl: 'row' }} gap={10}>
                            <Box>
                                <Image w='300px' h='300px' border={'1px solid #10ac84'} borderRadius={'500px'} src={contact} />
                            </Box>

                            <Flex gap={4} flexDir={'column'} w={'400px'}>
                                <Text fontWeight={700}>Contact Us</Text>
                                <Input 
                                    ref={nameInputRef} 
                                    required 
                                    type='text' 
                                    name="name" 
                                    value={user.name} 
                                    onChange={handleChange} 
                                    placeholder='Enter Name' 
                                />
                                <Input 
                                    required 
                                    type='tel' 
                                    minLength={10} 
                                    name="number" 
                                    value={user.number} 
                                    onChange={handleChange} 
                                    placeholder='Enter Mobile Number' 
                                />
                                <Textarea 
                                    name="message" 
                                    value={user.message} 
                                    onChange={handleChange} 
                                    placeholder='Message' 
                                />
                                <Button bg={'#10ac84'} color={'white'} type='submit' _hover={{ bg: "#feca57" }}>Submit</Button>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
            </form>
        </>
    );
}
