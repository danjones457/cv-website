import './App.css';
import React, { useState } from 'react';
import BodyPage from './pages/BodyPage';

function App() {
  const [page, setPage] = useState(3);

  return (
    <div className="text-center flex h-full">
      <header className="w-7 md:w-56 text-center">
        <ul className="text-left p-0 absolute w-44 top-1/2 transform -translate-y-1/2 list-none left-2">
          <li onClick={() => setPage(1)} className="text-green text-2xl pb-1 hover:animate-bounce-nav"><i className="far fa-user-circle w-1/6"></i> <span className="hidden md:inline-block">About</span></li>
          <li onClick={() => setPage(2)} className="text-green text-2xl pb-1 hover:animate-bounce-nav"><i className="fas fa-phone-alt w-1/6"></i> <span className="hidden md:inline-block">Contact</span></li>
          <li onClick={() => setPage(3)} className="text-green text-2xl pb-1 hover:animate-bounce-nav"><i className="fas fa-briefcase w-1/6"></i> <span className="hidden md:inline-block">Experience</span></li>
          <li onClick={() => setPage(4)} className="text-green text-2xl pb-1 hover:animate-bounce-nav"><i className="fas fa-graduation-cap w-1/6"></i> <span className="hidden md:inline-block">Education</span></li>
          <li onClick={() => setPage(5)} className="text-green text-2xl hover:animate-bounce-nav"><i className="fas fa-lightbulb w-1/6"></i> <span className="hidden md:inline-block">Projects</span></li>
        </ul>
      </header>
      <div className="w-full p-5 overflow-y-auto">
        <div className="typewriter w-min m-auto text-center">
          <h1 className="text-green font-bold text-3xl">Dan Jones</h1>
        </div>
        <BodyPage page={page} />
      </div>
    </div>
  );
}

export default App;
