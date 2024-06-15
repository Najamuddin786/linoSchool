import {Box,Flex} from '@chakra-ui/react'
import EventImage from '../Components/EventImage'
import Approve from '../Components/Approve'
import Welcome from '../Components/Welcome'
import Result from '../Components/Result'

export default function Home(){

    return <>
       <Welcome/>
       <EventImage/>
       <Result/>
       <Approve/>
    </>
}