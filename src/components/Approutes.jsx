import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Products from "./Products"
import About from "./About"
import Login from "./Login"
const Approutes = () => {
  return (
    <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<Login/>}/>
       </Routes>
  )
}

export default Approutes