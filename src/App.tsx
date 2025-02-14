import About from "./Components/About";
import Home from "./Components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Marketplace from "./Components/Marketplace";
import SellCoin from "./Components/SellCoin";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="About" element={<About/>} />
      <Route path="/sell" element={<SellCoin />} />
      <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
      </BrowserRouter>
      

    </div>
  )
}

export default App