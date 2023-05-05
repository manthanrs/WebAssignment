
import "./FooterStyles.css"

import {FaFacebook, FaLinkedin, FaInstagram} from "react-icons/fa";
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
          
            <div>
              <p>Aavhan 2023</p>
              <p>Aavhan, the annual sports fest of IIT Bombay, 
                synonymous with what it stands for, 
                bringing over 6000 people together from 150+ 
                colleges to compete, persevere and rejoice in 
                the 3 day sporting extravaganza, spanning 15+ 
                sports.</p>
            </div>
          </div>
        </div>

        <div className="right">
          <h4>Follow Us</h4>
          <div className="social">

          <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/>
          <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
          <FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}}/>

          </div>
        </div>
      </div>
    </div>  
  );
}

export default Footer