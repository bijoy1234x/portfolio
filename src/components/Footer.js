import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to ="https://www.instagram.com/bijoy_chouhan/">
        <InstagramIcon />
        </Link> 
        <Link to ="https://www.facebook.com/bijoy.chouhan.96">
        <FacebookIcon />
          </Link>
        <Link to ="https://www.linkedin.com/in/bijoy-chouhan-88971622b/">
          <LinkedInIcon />
          </Link>
      </div>
      <p> copyright &#169; Bijoy Chouhan | All Rights Reserved</p>
    </div>
  );
}

export default Footer;
