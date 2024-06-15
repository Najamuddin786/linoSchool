import {Box,Text} from "@chakra-ui/react"
import By from "./By"
import '../App.css'
export default function Welcome(){
    return <>
        <Box  px={{ base: '2%', md: '8%', xl: '14%' }} >
            <By title="Welcome To LinoSchool"/>
            <Text p={2} border={'2px dotted #10ac84'}>
            <Text className="rotating-divrotating-div" bg={'#10ac84'} p='1' fontWeight={600} color={'white'}>About School</Text> is renowned for its commitment to providing high-quality education and fostering a nurturing environment for students. With a strong emphasis on academic excellence, LinoSchool offers a comprehensive curriculum that caters to diverse learning needs and prepares students for future success. The school’s highly qualified and dedicated teachers employ innovative teaching methods, ensuring that each student receives personalized attention and support.

            Beyond academics, LinoSchool excels in extracurricular activities, promoting a well-rounded development for its students. The school boasts state-of-the-art facilities, including science labs, a library, sports complexes, and art studios, which encourage students to explore their interests and talents. Regular field trips, cultural events, and community service projects further enhance the learning experience, making education at LinoSchool engaging and impactful.

            LinoSchool’s inclusive and supportive community fosters a sense of belonging and encourages students to thrive both academically and personally. The school’s emphasis on values such as respect, integrity, and teamwork helps in developing responsible and compassionate individuals. Parents and students alike commend LinoSchool for its safe and positive learning environment, strong academic programs, and dedicated staff.

            In essence, LinoSchool stands as a beacon of quality education, providing students with the knowledge, skills, and values needed to succeed in an ever-evolving world.
            </Text>


        </Box>
    </>
}