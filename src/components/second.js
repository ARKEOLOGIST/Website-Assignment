import React from 'react';
import './second.css';
import Table from '../assets/Group 6.png';


function Second() {
  return (
    <div className="second">
       <div id="bg"><div id="heading"><h2>This is a heading in two lines</h2></div></div>
       <div id="table"><img src={Table} alt="table"/></div>
    </div>
  );
}

export default Second;
