import './App.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Header from './components/Header';
import Home from './view/Home'

function App() {
  return (
    <div className='app'>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
