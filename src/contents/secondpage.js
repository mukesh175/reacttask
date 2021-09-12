import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import more_icon from "../img/icons_raw_more.png";
import uparrow from "../img/buttons_small.png";

import { Line } from "rc-progress";

import {
  Col,
  Row,
  Container,
  Tabs,
  Tab,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap-grid.css";

import "bootstrap/dist/css/bootstrap.min.css";

class Second extends Component {
  render() {
    return (
      <div className="full-screen">
        <header class="wave-top">
          <div className="sec1">
            <Container>
              <ReactTypingEffect
                className="typingeffect main-head"
                text={["Hello Jessice,"]}
                speed={100}
                eraseDelay={700}
              />
              <p className="sub-head">at the moment you have </p>
              <div className="progressbar">
                <p className="">
                  <span>32.5 GB</span> of 100 GB Free
                </p>
                <img src={uparrow} className=""></img>
                <Line percent="70" strokeWidth="2" strokeColor="#ff6aa2" />
              </div>
            </Container>
          </div>
          <div className="sec2">
            <Container>
          
        <form>
          <input className=" search-field"
            placeholder="&#61442; &nbsp; Search for..."
            
          />
        </form>
      
              <Tabs defaultActiveKey="home">
                <Tab eventKey="home" title="FILES">
                  <Container classNameName="pt-2">
                    <Row>
                      <Col xs={6}>
                        <div className="box">
                          <h3>
                            The next
                            <br /> big thing
                          </h3>

                          <img src={more_icon} className=""></img>

                          <p>12 f.2.1 gb</p>

                          <ul className="pro">
                            <li> </li>
                            <li> </li>
                            <li> </li>
                            <li> </li>
                          </ul>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className="box">
                          <h3>
                            The next
                            <br /> big thing
                          </h3>
                          <img src={more_icon} className=""></img>

                          <p>12 f.2.1 gb</p>

                          <ul className="pro">
                            <li> </li>
                            <li> </li>
                            <li> </li>
                            <li> </li>
                          </ul>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className="box">
                          <h3>
                            The next
                            <br /> big thing
                          </h3>
                          <img src={more_icon} className=""></img>

                          <p>12 f.2.1 gb</p>

                          <ul className="pro">
                            <li> </li>
                            <li> </li>
                            <li> </li>
                            <li> </li>
                          </ul>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className="box">
                          <h3>
                            The next
                            <br /> big thing
                          </h3>
                          <img src={more_icon} className=""></img>

                          <p>12 f.2.1 gb</p>

                          <ul className="pro">
                            <li> </li>
                            <li> </li>
                            <li> </li>
                            <li> </li>
                          </ul>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className="box">
                          <h3>
                            The next
                            <br /> big thing
                          </h3>
                          <img src={more_icon} className=""></img>

                          <p>12 f.2.1 gb</p>

                          <ul className="pro">
                            <li> </li>
                            <li> </li>
                            <li> </li>
                            <li> </li>
                          </ul>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className="box">
                          <h3>
                            The next
                            <br /> big thing
                          </h3>
                          <img src={more_icon} className=""></img>

                          <p>12 f.2.1 gb</p>

                          <ul className="pro">
                            <li> </li>
                            <li> </li>
                            <li> </li>
                            <li> </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </Tab>
                <Tab eventKey="profile" title="FOLDERS">
                  <Container classNameName="pt-2">
                    <Row>
                      <Col xs={6}>
                        <div className="box">
                          <h3>
                            The next
                            <br /> thing
                          </h3>
                          <img src={more_icon} className=""></img>

                          <p>12 f.2.1 gb</p>

                          <ul className="pro">
                            <li> </li>
                            <li> </li>
                            <li> </li>
                            <li> </li>
                          </ul>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className="box">
                          <h3>
                            The next
                            <br /> thing
                          </h3>
                          <img src={more_icon} className=""></img>

                          <p>12 f.2.1 gb</p>

                          <ul className="pro">
                            <li> </li>
                            <li> </li>
                            <li> </li>
                            <li> </li>
                          </ul>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className="box">
                          <h3>
                            The next
                            <br /> thing
                          </h3>
                          <img src={more_icon} className=""></img>

                          <p>12 f.2.1 gb</p>

                          <ul className="pro">
                            <li> </li>
                            <li> </li>
                            <li> </li>
                            <li> </li>
                          </ul>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className="box">
                          <h3>
                            The next
                            <br /> thing
                          </h3>
                          <img src={more_icon} className=""></img>

                          <p>12 f.2.1 gb</p>

                          <ul className="pro">
                            <li> </li>
                            <li> </li>
                            <li> </li>
                            <li> </li>
                          </ul>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className="box">
                          <h3>
                            The next
                            <br /> thing
                          </h3>
                          <img src={more_icon} className=""></img>

                          <p>12 f.2.1 gb</p>

                          <ul className="pro">
                            <li> </li>
                            <li> </li>
                            <li> </li>
                            <li> </li>
                          </ul>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className="box">
                          <h3>
                            The next
                            <br /> thing
                          </h3>
                          <img src={more_icon} className=""></img>

                          <p>12 f.2.1 gb</p>

                          <ul className="pro">
                            <li> </li>
                            <li> </li>
                            <li> </li>
                            <li> </li>
                          </ul>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className="box">
                          <h3>
                            The next
                            <br /> thing
                          </h3>
                          <img src={more_icon} className=""></img>

                          <p>12 f.2.1 gb</p>

                          <ul className="pro">
                            <li> </li>
                            <li> </li>
                            <li> </li>
                            <li> </li>
                          </ul>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className="box">
                          <h3>
                            The next
                            <br /> thing
                          </h3>
                          <img src={more_icon} className=""></img>

                          <p>12 f.2.1 gb</p>

                          <ul className="pro">
                            <li> </li>
                            <li> </li>
                            <li> </li>
                            <li> </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </Tab>
              </Tabs>
            </Container>
          </div>
        </header>
      </div>
    );
  }
}
export default Second;
