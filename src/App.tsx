import About from "./Components/About";
import Home from "./Components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Marketplace from "./Components/Marketplace";
// import SellCoin from "./Components/SellCoin";
import Contact from "./Components/Contact";
import Collection from "./Components/Collection";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="About" element={<About/>} />
      {/* <Route path="/sell" element={<SellCoin />} /> */}
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Collection" element={<Collection />} />
      </Routes>
      </BrowserRouter>
      

    </div>
  )
}

export default App