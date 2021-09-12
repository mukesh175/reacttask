import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";

import { Line } from "rc-progress";

import { Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap-grid.css";

import "bootstrap/dist/css/bootstrap.min.css";

import music from "../img/icons_with background_category.png";
import photo from "../img/icons_with background_category (1).png";
import lock from "../img/icons_with background_category (2).png";

import edit from "../img/icons_nav bar.png";
import more_arrow from "../img/Stroke 1.png";

import bmusic from "../img/icons_with background_category_core.png";

import block from "../img/icons_with background_link (1).png";

import more from "../img/Combined Shape (1).png";

class Six extends Component {
  render() {
    return (
      <div className="">
        <header class="wave-top">
          <div className="sec1">
            <Container>
              <div className="profile">
                <ReactTypingEffect
                  className="typingeffect tmain-head"
                  text={["Profile"]}
                  speed={100}
                  eraseDelay={700}
                />
                <img src={edit} className="opt-icon"></img>
              </div>
            </Container>
          </div>
          <div className="sec2">
            <Container>
              <div className="profile_data">
                <img src={music} className="" />
                <div className="profile_info">
                  <h3 className="">
                    Jessie Roberts
                    <p>1458 files · 25 folders</p>
                  </h3>
                </div>
              </div>

              <div className="pro_progressbar">
                <p className="">
                  <span>32,5 GB free</span> of 100 GB
                </p>

                <Line percent="70" strokeWidth="2" strokeColor="#ff6aa2" />
              </div>
              <div className="profile_opt">
                <h3 className="">Storage management

</h3>

                <img src={more_arrow} className="opt-icon"></img>
              </div>
              <div className="profile_opt">
                <h3 className="">Devices</h3>
                <p>iPhone, Macbook, iPad </p>

                <img src={more_arrow} className="opt-icon"></img>
              </div>
              <div className="profile_opt">
                <h3 className="">Camera uploads

</h3>

                <img src={more} className="opt-icon"></img>
              </div>
              <div className="profile_opt">
                <h3 className="">Use data for file transfer

</h3>

                <img src={more} className="opt-icon"></img>
              </div>
             
            </Container>
          </div>
        </header>
      </div>
    );
  }
}
export default Six;
