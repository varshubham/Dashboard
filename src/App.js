
import './App.css';
import Items from './components/Items';
import Navbar from './components/Navbar';
import About from './components/About';
import DataState from './context/DataState'
import Test from './components/Test'
import Region from './components/Region';
import Sector from './components/Sector';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App () {
  
  return (
    <>
     <DataState>
      <Router>
        <Navbar />
        
        <Routes>
          <Route exact path='/' element={<Items/>} />
          <Route exact path='/topic/:topic' element={<Test/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/region/:region' element={<Region/>} />
          <Route exact path='/sector/:sector' element={<Sector/>} />
        </Routes>
        
      </Router>
      </DataState>
     
    </>
  );
}

export default App;
