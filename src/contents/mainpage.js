import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import mainpageimg from '../img/illustration.png';
import icon_arrow from '../img/icons_tab bar_stats copy.png';

class Home extends Component{
render(){

    return(


        <div className="full-img img-size">

        {/* <img src={mainpageimg} className="img-size"></img>*/}
         <ReactTypingEffect className="typingeffect text-effect" text={['Your cloud storage safe and sound']} speed={100} eraseDelay={700}/>
         {/* <img src={icon_arrow} className="" style={{ width : '50px'}}></img> */}
         <a href="/Second"> <img src={icon_arrow} className="img-arrow" ></img></a> 
       

              </div>

    )

}

}
export default Home

