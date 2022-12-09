
import { Routes, Route} from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
// import { useContextGlobal} from './Components/utils/global.context';
import Home  from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";


function App() {
  return (
      <div className="App">
       <Navbar/>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dentist/:id" element={<Detail/>}/>
          <Route path="/contacto" element={<Contact/>} />
          <Route path="/favs" element={<Favs/>}/>
       </Routes>
       <div className='division_footer'></div>
       <Footer/>
      </div>
  );
}

export default App;
