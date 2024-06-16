import { Route,Routes } from "react-router-dom"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import Faculty from "../Pages/Faculty"
import Location from "../Pages/Location"

export default function AllRoutes(){

    return <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/faculty" element={<Faculty/>}/>
            <Route path="/location" element={<Location/>}/>
        </Routes>
    </>
}