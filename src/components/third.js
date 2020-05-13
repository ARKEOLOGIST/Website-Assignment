import React from 'react';
import './third.css';

class Third extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {number: 3, toggle: true}; 
    }

    render()
    {
        return(
        <div className="third">
           <div id="content_3">
           <div id="starting">
              <h2>Compare pricing today!</h2>
              <div id="typeset">Lorem Ipsum is simply dummy text of the printing and &nbsp;<div className="blue">typesetting.</div></div>
           </div>
           <div id="boxes">
          <span className="rectangle"><h4>25 Serving</h4></span>
          <span className="rectangle"><h4>50 Serving</h4></span>
          <span className="rectangle_selected"><h4>100 Serving</h4></span>
          <span className="rectangle"><h4>200 Serving</h4></span>
           </div>
           <div>
           <label><div id="size"><h4>Annual</h4><div>50% off</div></div></label>
           <input type="range" id="slider" step = "1" min="0" max="1"></input>
           <label><div id="size"><h4>Monthly</h4></div></label>
           </div>
           <div id="cards">
           <div className="card">
           <div className="card_content">
           <h3>lollipop</h3>
           <div className="define"><h2>$100</h2><div><i>Per Month</i></div></div>
           <div>For 100 serving</div>
           </div>
           </div>
           <div className="card">
           <div className="card_content">
           <h3>icecandy</h3>
           <div className="define"><h2>$200</h2><div><i>Per Month</i></div></div>
           <div>For 100 serving</div>
           </div>
           </div>
           <div className="card_selected">
           <div className="card_selected_content">
           <div><h3>Your savings with lollipop</h3></div>
           <div className="blue"><h2>$100</h2></div>
           <div><i>Per Month</i></div>
           </div>
           </div>
           </div>
        </div>
        </div>
        );
    }
}

export default Third;