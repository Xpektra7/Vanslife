import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from './pages/Vans';


function App() {

  return (
    <BrowserRouter className="">
      <header className="flex items-center justify-between bg-orange-200 text-black p-4 px-16 h-[10vh]">
        <Link to="/"><div className="text-3xl font-bold clip-van bg-orange-300 py-1 flex items-center rounded-md px-8">VANLIFE</div></Link>
        <ul className="flex gap-4 justify-center">
          <li><Link to="/about" className="text-xl cursor-pointer">About</Link></li>
          <li><Link to="/vans" className="text-xl cursor-pointer">Vans</Link></li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      <footer className="bg-neutral-900 flex text-white items-center justify-center p-4 px-16 h-[10vh]">
        &copy; 2023 #VANLIFE
      </footer>
    </BrowserRouter>
    
  );
}

export default App;
