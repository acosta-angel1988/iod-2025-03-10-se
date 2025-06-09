import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Emoji from "./Emoji";

const App = () => {
  return (
    <div className="App">
      <h1>Emoji Switcher</h1>
      <Emoji />
    </div>
  );
};

export default App;
