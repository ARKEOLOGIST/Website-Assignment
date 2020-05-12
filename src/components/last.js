import React from 'react';
import './last.css';
import luggage from '../assets/Group 4.png';

function Last() {
  return (
    <div className="last">
      <div id = "two_grid_2">
      <div id="para_2">
      <div id="left_2"><h1>Loved by users, recommended by experts</h1></div>
      <div id="space_2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
      <div id="buttons_2">
      <div id="left_button_2"><div className="button_text_2">Primary CTA</div></div>
      </div>
      </div>
      <div id="image_2">
      <img src={luggage} height="340px" width="300px" alt="luggage"/>
      </div>
      </div>
    </div>
  );
}

export default Last;
