import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import WeatherApp from './weatherapp';
import Home from './main';
import './index.css'

function App() {
  return (
     <div className='App'>
         <Router>
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/weatherwizard' element={<WeatherApp />}> </Route>
        </Routes>

      </Router>

     </div>

   
  
 
  );
}

export default App;
