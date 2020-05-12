import React from 'react';
import './first.css';
import globe from '../assets/globe.PNG';

function First() {
  return (
    <div className="first">
      <div id = "two_grid_1">
      <div id="para_1">
      <div id="left_1"><h1>Looking for a lollipop alternative?</h1></div>
      <div id="space_1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
      <div id="buttons_1">
      <div id="left_button_1"><div className="button_text_1">Primary CTA</div></div>
      <div id="right_button_1"><div className="button_text_1">Secondary CTA</div></div>
      </div>
      </div>
      <div id="image_1">
      <img src={globe} height="330px" width="280px" alt="globe"/>
      </div>
      </div>
    </div>
  );
}

export default First;
