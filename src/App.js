import './App.css';

// pages
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Cadastro from './pages/Auth/Cadastro';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/cadastro' element={<Cadastro/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
