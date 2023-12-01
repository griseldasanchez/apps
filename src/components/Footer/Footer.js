import React from 'react';
import "./Footer.css";

export default function Footer() {
  return (
   <div id="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <p>Sites <br /></p>
          LinkedIn <br />
          Github
        </div>
        <div className="footer-column">
          <p>Contact <br /></p>
          Name <br />
          Email <br />
        </div>
      </div>
   </div>
  )
}