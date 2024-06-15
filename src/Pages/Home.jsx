import {Box,Flex} from '@chakra-ui/react'
import EventImage from '../Components/EventImage'
import Approve from '../Components/Approve'
import Welcome from '../Components/Welcome'
import Result from '../Components/Result'
import Special from '../Components/Special'

export default function Home(){

    return <>
       <Welcome/>
       <Special/>
       <EventImage/>
       <Result/>
       <Approve/>
    </>
}