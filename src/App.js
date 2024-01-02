
import './App.scss';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './components/Home'
import Header from './components/Header'
import  Working from './components/Working'

function App() {
  return (
       
        <Router>
           <Header/> 
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/tvshows' element={<Working/>}/>
            <Route path='/movies' element={<Working/>}/>
            <Route path='/recent' element={<Working/>}/>
            <Route path='/mylist' element={<Working/>}/>
          </Routes>
        </Router>
  );
}

export default App;
