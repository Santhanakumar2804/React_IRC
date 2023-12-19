import React from "react";
import '../assets/Footer.css'
import {Twitter,Facebook,Instagram} from 'lucide-react';
const Footer =()=> {
    return (
        <>
        <div className="first">
        <div className="footer-content">
        <div className="footer-links">
          <a href="/faq">FAQ</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-and-conditions">Terms and Conditions</a>
        </div>
        <div className="footer-text">
          &copy; 2023 PRO SPORTS EMPORIUM websites. All rights reserved.
        </div>
      </div>
      <div className="social">

      <div className='social1'>
            <button>
                <div className='btn1'>
                <div className='i1'><Twitter/></div>
                <div className='b1'>Twitter</div>
                </div>
            </button>
            </div>
      <div className='social2'>
            <button>
                <div className='btn1'>
                <div className='i1'><Facebook/></div>
                <div className='b1'>Facebook</div>
                </div>
            </button>
            </div>
      <div className='social3'>
            <button>
                <div className='btn1'>
                <div className='i1'><Instagram/></div>
                <div className='b1'>Instagram</div>
                </div>
            </button>
            </div>
        </div>
      </div>
        </>
    );
}
export default Footer;