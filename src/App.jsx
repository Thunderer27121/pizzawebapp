import Navbar from "./components/Navbar"
import Approutes from "./components/Approutes"
const App = () => {
  return (
    <div className=" h-screen w-full bg-black text-white overflow-auto" style={{scrollbarWidth: "none"}}>
      <Navbar/>
      <Approutes />
    </div>
  )
}

export default App