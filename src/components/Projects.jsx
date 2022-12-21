import React from "react";

function Projects() {


    return (
        <div className="projects">
            <h1>Take a look at my project</h1>
            <div className="project_container">
                <p>FULLSTACK WEB APPLICATION</p>
                <a href="https://intense-dusk-47752.herokuapp.com/">
                    <img src="./project_img.jpg" alt="my-project" />
                </a>
                <div className="img_text">
                   
                </div>
                <div className="logo_container">
                    <img src="./logo/html_icon.png" alt="logo" />
                    <img src="./logo/css_icon.png" alt="logo" />
                    <img src="./logo/js_icon.png" alt="logo" />
                    <img src="./logo/bootstrap_logo_icon.png" alt="logo" />
                    <img src="./logo/nodejs_logo_icon.png" alt="logo" />
                    <img src="./logo/heroku_icon.png" alt="logo" />
                    <img src="./logo/mongodb_logo_icon.png" alt="logo" />
                    <img src="./logo/express_logo_icon.png" alt="logo" />
                </div>

            </div>
        </div>
    )
}
export default Projects;