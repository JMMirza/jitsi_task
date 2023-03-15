import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/MainPage/MainPage';
import Index from './pages/StartPage/Index';

function App() {
  useEffect(() => {
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/meet' element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
