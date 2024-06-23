import React from 'react';
import { Box, Heading, Text, List, ListItem, Link, VStack } from '@chakra-ui/react';

const Resume = () => {
  return (
    <Box width="80%" margin="0 auto" padding="20px" backgroundColor="white" boxShadow="lg">
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl">Md Najamuddin</Heading>
          <Text>Location: Santpur, Nautan Dube, Bettiah, Bihar</Text>
          <Text>Email: <Link href="mailto:your-email@example.com">your-email@example.com</Link></Text>
          <Text>Phone: [your-phone-number]</Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" borderBottom="2px solid" paddingBottom="5px">Objective</Heading>
          <Text>To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills. Seeking a role where I can contribute my skills in HTML, CSS, JavaScript, React, and Chakra UI.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" borderBottom="2px solid" paddingBottom="5px">Education</Heading>
          <List spacing={3}>
            <ListItem>
              <Text as="strong">Bachelor of Computer Applications (BCA)</Text><br />
              <Text>[Your University Name], [Your University Location]</Text>
              <Text>[Month/Year] - [Month/Year]</Text>
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="lg" borderBottom="2px solid" paddingBottom="5px">Technical Skills</Heading>
          <List spacing={3}>
            <ListItem><Text as="strong">Languages & Technologies:</Text> HTML, CSS, JavaScript, React</ListItem>
            <ListItem><Text as="strong">Frameworks & Libraries:</Text> Chakra UI</ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="lg" borderBottom="2px solid" paddingBottom="5px">Projects</Heading>
          <List spacing={3}>
            <ListItem>
              <Text as="strong">Project A:</Text> <Link href="link-to-project-a" color="teal.500">link to project A</Link><br />
              Description of the project, your role, and the technologies used.
            </ListItem>
            <ListItem>
              <Text as="strong">Project B:</Text> <Link href="link-to-project-b" color="teal.500">link to project B</Link><br />
              Description of the project, your role, and the technologies used.
            </ListItem>
            <ListItem>
              <Text as="strong">Project C:</Text> <Link href="link-to-project-c" color="teal.500">link to project C</Link><br />
              Description of the project, your role, and the technologies used.
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="lg" borderBottom="2px solid" paddingBottom="5px">Professional Experience</Heading>
          <List spacing={3}>
            <ListItem>(If you have any professional experience, list it here. If not, you can focus on projects and skills.)</ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="lg" borderBottom="2px solid" paddingBottom="5px">Personal Information</Heading>
          <List spacing={3}>
            <ListItem><Text as="strong">Father's Name:</Text> Shekh Ismail</ListItem>
            <ListItem><Text as="strong">Location:</Text> Santpur, Nautan Dube, Bettiah, Bihar</ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="lg" borderBottom="2px solid" paddingBottom="5px">Declaration</Heading>
          <Text>I hereby declare that the information provided is true to the best of my knowledge.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" borderBottom="2px solid" paddingBottom="5px">Signature</Heading>
          <Text>Md Najamuddin</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Resume;
