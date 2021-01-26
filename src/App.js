import React, { useState, useEffect } from 'react';
import { Canvas } from './Canvas'
import './App.css';

function App() {
  const [isEraser, setIsEraser] = useState(false);

  return (
    <main>
      <div className="button" >
        <button onClick={() => setIsEraser(!isEraser)} > Eraser </button>
      </div>
      <Canvas isEraser={isEraser}/>
    </main>
  );
}

export default App;
