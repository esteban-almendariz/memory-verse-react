import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainNav from './Navigation/MainNav';
import Home from './pages/Home';
import Bible from './pages/Bible';
import Notes from './pages/Notes';
import Videos from './pages/Videos';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <MainNav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/bible' element={<Bible />} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/videos' element={<Videos />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
