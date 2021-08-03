import React from "react";
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';

function Contact() {

    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <div className="info">
            <div className="email">
                <EmailIcon fontSize="large"/>
            {/* <img src="\logo\gmail_icon.png" alt="gmail" /> */}
                <a href="mailto:bathenalmayo@gamil.com"> bathenalmayo@gamil.com</a>
                   
            </div>
            <div className="phone" >
                <PhoneIcon fontSize="large" />
                <span>
                    +972523339286
                </span>
            </div>
            <div className="social">   
               
                <a href="https://www.linkedin.com/in/bathen-almayo-6358b2133/">
                     <LinkedInIcon fontSize="large" />
                </a>
                <a href="https://github.com/bathenalmayo">
                     <GitHubIcon  fontSize="large"/>
                </a>
            </div>
            </div>
        </div>
    )
}
export default Contact;