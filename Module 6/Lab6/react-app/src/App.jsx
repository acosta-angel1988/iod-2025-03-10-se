import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './components/Calculator';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Calculator />
    </div>
  );
};

export default App;
