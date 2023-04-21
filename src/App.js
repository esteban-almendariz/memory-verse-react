import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom';

import MainNav from './Navigation/MainNav';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <MainNav />
        <Routes>
          <Route>

          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
