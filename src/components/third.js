import React from 'react';
import './third.css';

class Third extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {number: 3,amount: 100, toggle: 1,data: {icecandy: {monthly: 2,yearly: 1},lollipop: {monthly: 1,yearly: 0.5}}}; 
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
          <span className={this.state.number==1?"rectangle_selected":"rectangle"} id="1" onClick={() => {this.setState({ number: 1,amount: 25 });}}><h4>25 Serving</h4></span>
          <span className={this.state.number==2?"rectangle_selected":"rectangle"} id="2" onClick={() => {this.setState({ number: 2,amount: 50 });}}><h4>50 Serving</h4></span>
          <span className={this.state.number==3?"rectangle_selected":"rectangle"} id="3" onClick={() => {this.setState({ number: 3,amount: 100 });}}><h4>100 Serving</h4></span>
          <span className={this.state.number==4?"rectangle_selected":"rectangle"} id="4" onClick={() => {this.setState({ number: 4,amount: 200 });}}><h4>200 Serving</h4></span>
           </div>
           <div id="slide">
           <div className="size" id="pos"><h4>Annual</h4><div id="grey">50% off</div></div>
           <input type="range" class="slider" step = "1" min="0" max="1" onChange={(e) => { if (e.target.value == 0) { this.setState({ toggle: 0 }); } else { this.setState({ toggle: 1 }); }}}></input>
           <div className="size" id="mon"><h4>Monthly</h4></div>
           </div>
           <div id="cards">
           <div className="card">
           <div className="card_content">
           <h3>lollipop</h3>
           <div className="define"><h2>${this.state.toggle==1?this.state.data.lollipop.monthly*this.state.amount:this.state.data.lollipop.yearly*this.state.amount}</h2><div><i>Per Month</i></div></div>
           <div className="serve">For {this.state.amount} serving</div>
           </div>
           </div>
           <div className="card">
           <div className="card_content">
           <h3>icecandy</h3>
           <div className="define"><h2>${this.state.toggle==1?this.state.data.icecandy.monthly*this.state.amount:this.state.data.icecandy.yearly*this.state.amount}</h2><div><i>Per Month</i></div></div>
           <div className="serve">For {this.state.amount} serving</div>
           </div>
           </div>
           <div className="card_selected">
           <div className="card_selected_content">
           <div id="selected_text"><h3>Your savings with lollipop</h3></div>
           <div className="blue"><h2>${this.state.toggle==1?this.state.data.icecandy.monthly*this.state.amount-this.state.data.lollipop.monthly*this.state.amount:this.state.data.icecandy.yearly*this.state.amount-this.state.data.lollipop.yearly*this.state.amount}</h2></div>
           <div id="month"><i>Per Month</i></div>
           </div>
           </div>
           </div>
        </div>
        </div>
        );
    }
}

export default Third;