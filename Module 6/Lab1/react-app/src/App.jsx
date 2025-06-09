import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting';
<components></components>;
const App = () => {
  return (
    <div>
      <Greeting name="Angel">
        <p>Welcome to the app! Hope you enjoy your stay.</p>
      </Greeting>

      <Greeting name="Taylor">
        <p>Here's a special message just for you.</p>
      </Greeting>
    </div>
  );
};

export default App
