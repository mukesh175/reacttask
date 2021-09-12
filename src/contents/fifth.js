import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";

import notify_img from "../img/Illustration1.png";


import { Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap-grid.css";

import "bootstrap/dist/css/bootstrap.min.css";


const options = {
  loop: false,
  items: 4, // Select Item Number
  autoplay: false,
  dots: true,
  nav: false,

};

class Third extends Component {
  render() {
    return (
      <div className="">
        <header class="wave-top">
          <div className="sec1">
            <Container>
              <ReactTypingEffect
                className="typingeffect tmain-head"
                text={["Notification"]}
                speed={100}
                eraseDelay={700}
              />
            </Container>
          </div>
          <div className="sec2">
            <Container>
             
             
              <div className="notify">
                <img src={notify_img} className="" />
              
              </div>
              <h3 className="not-title">
              No notifcations yet
               
                </h3>
                <p className="not-txt">Here you will see the external changes in your shared folders, tags from your peers and other updates

</p>
            </Container>
          </div>
        </header>
      </div>
    );
  }
}
export default Third;
