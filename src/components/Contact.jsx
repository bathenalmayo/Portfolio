import React from "react";
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';

function Contact() {

    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <div>
            <EmailIcon />
                <span>
                  
                    bathenalmayo@gamil.com
                </span>
            </div>
                <span>
                    <PhoneIcon />
                    052-3339286
                </span>
           
            <div>   
                <LinkedInIcon />
                <GitHubIcon />
            </div>

        </div>
    )
}
export default Contact;