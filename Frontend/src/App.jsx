import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Home from "./components/Home";
import {Route,Routes} from "react-router-dom"
import Signup from "./components/Signup";
export default function App() {
  return (
<>
<Routes>
<Route path="/" element = {<Home/>}/>
<Route path="/courses" element= {<Courses/>}/>
<Route path="/contact" element= {<Contact/>}/>
<Route path="/signup" element= {<Signup/>}/>
</Routes>
</>
  )
}