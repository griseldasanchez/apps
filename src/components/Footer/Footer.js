import React from 'react';
import "./Footer.css";

export default function Footer() {
  return (
   <div id="footer">
      <div className="footer-columns">
        <div className="footer-column">
          Sites <br />
          LinkedIn <br />
          Github
        </div>
        <div className="footer-column">
          Contact <br />
          Name <br />
          Email <br />
        </div>
      </div>
   </div>
  )
}