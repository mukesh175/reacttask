import React, { Component, useState } from "react";
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

import {
  Route,
  NavLink,
  HashRouter,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import Home from './contents/mainpage';
import Second from './contents/secondpage';
import Third from './contents/thirdpage';
import Six from './contents/sixth';
import Fifth from './contents/fifth';

import micon from '../src/img/icons_tab bar_action (1).png';
import info from '../src/img/icons_tab bar_tab (4).png';
import detail from '../src/img/icons_tab bar_tab (1).png';
import notify from '../src/img/icons_tab bar_tab (2).png';
import profile from '../src/img/icons_tab bar_tab (3).png';




function App() {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });
  return (



<Router>

<Switch>
  <Route exact path="/" component={Home} />

  
  <div className="App">
  <div>
      
      <ul className="header">
            <li><NavLink exact  to="/Second">  <img src={info} class=""></img></NavLink></li>
            <li><NavLink to="/Third">   <img src={detail} class=""></img></NavLink></li>
         {/*  <li><NavLink to="/Fourth"  onClick={() => setState({ isPaneOpenLeft: true })}>    <img src={micon} class=""></img></NavLink></li>*/}
         
         <li><button onClick={() => setState({ isPaneOpen: true })} className="addmore-btn">
         <img src={micon} class=""></img>
        </button></li>
            <li><NavLink to="/Fifth">    <img src={notify} class=""></img></NavLink></li>
            <li><NavLink to="/Six">    <img src={profile} class=""></img></NavLink></li>

      
      </ul>
      <div>
   
      <SlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        isOpen={state.isPaneOpen} 
        from="bottom"
        width="100%"
        height="100px"
      
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          setState({ isPaneOpen: false });
        }}
      >
       
        <img src={profile} class="addicon"></img>
        <img src={profile} class="addicon"></img>
        <img src={profile} class="addicon"></img>


      </SlidingPane>
 
    </div>
         <div className="content">
            <Route path="/Second" component={Second}/>
            <Route path="/Third" component={Third}/>
            <Route path="/Fifth" component={Fifth}/>

            <Route path="/Six" component={Six}/>

            

       
        </div>
    </div>
</div>
</Switch>
</Router>
   
  );
}

export default App;

