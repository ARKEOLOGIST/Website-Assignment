import React from 'react';
import './App.css';
import First from '../src/components/first';
import Second from '../src/components/second';
import Last from '../src/components/last';

function App() {
  return (
    <div className="App">
    <div id="section_1">
    <First/>
    </div>
    <div id="section_2">
    <Second/>
    </div>
    <div id="section_5">
    <Last/>
    </div>
    </div>
  );
}

export default App;
