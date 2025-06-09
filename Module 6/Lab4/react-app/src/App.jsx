import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BigCats from './components/BigCats';


const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <BigCats />
    </div>
  );
};

export default App;
