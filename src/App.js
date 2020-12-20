import './App.css';
import React, { useState } from 'react';
import BodyPage from './pages/BodyPage';

function App() {
  const [page, setPage] = useState(1);

  return (
    <div className="App">
      <header>
        <ul>
          <li onClick={() => setPage(1)} className="text-green"><i class="far fa-user-circle"></i> <span className="hidden md:inline-block">About</span></li>
          <li onClick={() => setPage(2)} className="text-green"><i class="fas fa-phone-alt"></i> <span className="hidden md:inline-block">Contact</span></li>
          <li onClick={() => setPage(3)} className="text-green"><i class="fas fa-briefcase"></i> <span className="hidden md:inline-block">Experience</span></li>
          <li onClick={() => setPage(4)} className="text-green"><i class="fas fa-graduation-cap"></i> <span className="hidden md:inline-block">Education</span></li>
          <li onClick={() => setPage(5)} className="text-green"><i class="fas fa-lightbulb"></i> <span className="hidden md:inline-block">Projects</span></li>
        </ul>
      </header>
      <div>
        <BodyPage page={page} />
      </div>
    </div>
  );
}

export default App;
