import {Box,Flex,Text} from '@chakra-ui/react'
export default function About(){

    return <>
        <Box px={{ base: '2%', md: '8%', xl: '14%' }} my={10}>
            <Flex flexDir={'column'} gap={5}  border={'2px dotted #10ac84'} p={'5'}>
            <Text>About LinoSchool</Text>
            <Flex flexDir={'column'} gap={5}>
            <Text>1. **Ambitious Project by Doon Educational Society**: Bettiah Lino School is a significant and ambitious educational initiative by the Doon Educational Society.</Text>
            <Text>2. **Location and Necessity**: Established in Bettiah (Bihar) to address the dire need for quality educational institutions in the area.</Text>
            <Text>3. **Spiritual and Global Vision**: The school is known for instilling a spiritual outlook and a global vision in its students.</Text>
            <Text>4. **Inclusive Reverence**: Teaches students to respect all people and religions, preparing them to serve humanity at large.</Text>
            <Text>5. **CBSE Affiliation**: Affiliated with CBSE, New Delhi, up to the 10+2 level, offering Science and Commerce streams.</Text>
            <Text>6. **Innovative and Risk-Taking Culture**: Encourages students to innovate and take risks when developing new ideas and solving problems.</Text>
            <Text>7. **Holistic Life Preparation**: Prepares students not just for exams but for life, aiming to make them conscious and contributing members of society.</Text>
            <Text>8. **Leadership Development**: Leadership is integrated into the curriculum and through various opportunities, such as leading clubs, societies, and sports teams.</Text>
            <Text>9. **Social Service Programme**: Engages students in innovative and creative projects linked to the school’s social service programme.
            </Text>
            <Text>10. **Academic and Extracurricular Committees**: Offers numerous committees for students to lead and participate in, discussing a wide range of topics from food to technology.</Text>

            </Flex>
            </Flex>

        </Box>
    </>
}