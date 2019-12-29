import React from 'react';
import './App.css';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <p>
          Hacé click en el botón para obtener las condiciones climáticas actuales.
        </p>
        <Home />
      </div>
    </div>
  );
}

export default App;
