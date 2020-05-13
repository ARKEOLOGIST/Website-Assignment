import React from 'react';
import './fourth.css';
import comma from '../assets/comma.PNG';
import raja from '../assets/review.PNG';

function Fourth() {
    return(
       <div className="fourth">
          <div id="content_4">
          <div id="heading_4"><h2>Here's what our customers have to say</h2></div>
          <div id="text">
          <div id="left_4"><img src={raja} alt="reviewer" height="280px" width="300px"/></div>
          <div id="right_4">
          <div id="feedback">
          <div id="com">
          <img src={comma} alt="comma"/>
          </div>
          <div id="lorem">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </div>
          </div>
          <div id="review">
          <div><h3>Raja Ram</h3></div>
          <div>Tip World</div>
          </div>
          <div id="selection">
          <span className="circle_selected">&nbsp;</span>
          <span className="circle">&nbsp;</span>
          <span className="circle">&nbsp;</span>
          <span className="circle">&nbsp;</span>
          </div>
          </div>
          </div>
       </div>
       </div>
    );
}

export default Fourth;