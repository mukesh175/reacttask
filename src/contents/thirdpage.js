import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import music from "../img/icons_with background_category.png";
import photo from "../img/icons_with background_category (1).png";
import lock from "../img/icons_with background_category (2).png";

import bvid from "../img/icons_with background_link.png";
import bimage from "../img/icons_with background_link (2).png";

import bmusic from "../img/icons_with background_category_core.png";

import block from "../img/icons_with background_link (1).png";



import more from "../img/Combined Shape (1).png";

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
                text={["Local Storage"]}
                speed={100}
                eraseDelay={700}
              />
                <form>
          <input className=" search-field"
            placeholder="&#61442; &nbsp; Search for..."
            
          />
        </form>
            </Container>
          </div>
          <div className="sec2">
            <Container>
              <OwlCarousel className="owl-theme" loop margin={10} {...options} navElement >
                <div className="item">
                <img src={bvid} className="dataicon" />
                <p className="info_icon">Video</p>
                </div>
                <div className="item">
                <img src={bimage} className="dataicon" />
                <p className="info_icon">Image</p>
                </div>
                <div className="item">
                <img src={bmusic} className="dataicon" />
                <p className="info_icon">Music</p>

                </div>
                <div className="item">
                <img src={block} className="dataicon" />
                <p className="info_icon">Archive</p>
                
                </div>
                <div className="item">
                <img src={bimage} className="dataicon" />
                <p className="info_icon">Image</p>

                </div>
              
              </OwlCarousel>
              <div className="data_list">
                <img src={music} className="dataicon" />
                <h3 className="">
                  Franky Wah - Aftertime
                  <br />
                  <span>mp3.9.3 mb</span>
                </h3>

                <img src={more} className="datamore"></img>
              </div>
              <div className="data_list">
                <img src={photo} className="dataicon" />
                <h3 className="">
                Annie's new car 
                  <br />
                  <span>jpg.4.8 mb</span>
                </h3>

                <img src={more} className="datamore"></img>
              </div>
              <div className="data_list">
                <img src={lock} className="dataicon" />
                <h3 className="">
                  Franky Wah - Aftertime
                  <br />
                  <span>mp3.9.3 mb</span>
                </h3>

                <img src={more} className="datamore"></img>
              </div>
                <div className="data_list">
                <img src={music} className="dataicon" />
                <h3 className="">
                  Franky Wah - Aftertime
                  <br />
                  <span>mp3.9.3 mb</span>
                </h3>

                <img src={more} className="datamore"></img>
              </div>
              <div className="data_list">
                <img src={photo} className="dataicon" />
                <h3 className="">
                  Franky Wah - Aftertime
                  <br />
                  <span>mp3.9.3 mb</span>
                </h3>

                <img src={more} className="datamore"></img>
              </div>
              <div className="data_list">
                <img src={lock} className="dataicon" />
                <h3 className="">
                  Franky Wah - Aftertime
                  <br />
                  <span>mp3.9.3 mb</span>
                </h3>

                <img src={more} className="datamore"></img>
              </div>
              <div className="data_list">
                <img src={music} className="dataicon" />
                <h3 className="">
                  Franky Wah - Aftertime
                  <br />
                  <span>mp3.9.3 mb</span>
                </h3>

                <img src={more} className="datamore"></img>
              </div>
              <div className="data_list">
                <img src={photo} className="dataicon" />
                <h3 className="">
                  Franky Wah - Aftertime
                  <br />
                  <span>mp3.9.3 mb</span>
                </h3>

                <img src={more} className="datamore"></img>
              </div>
              <div className="data_list">
                <img src={lock} className="dataicon" />
                <h3 className="">
                  Franky Wah - Aftertime
                  <br />
                  <span>mp3.9.3 mb</span>
                </h3>

                <img src={more} className="datamore"></img>
              </div>
            </Container>
          </div>
        </header>
      </div>
    );
  }
}
export default Third;
