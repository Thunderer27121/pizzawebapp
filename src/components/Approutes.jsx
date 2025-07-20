import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import Menu from "./Menu"
import Products from "./Products"
const Approutes = () => {
  return (
    <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/products/:category" element={<Products/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<Login/>}/>
       </Routes>
  )
}

export default Approutes