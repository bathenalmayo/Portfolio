import React,{useState, useEffect} from "react";
import cv from "../BathenCv.pdf";

function About() {

 const [isShowen, setIsShowen] = useState(false);
 useEffect(() => { setTimeout(() => {
        setIsShowen(true);
    }, 6000);
    
  }, []);

    return (
        <div className="about">
           { isShowen ?            
                        (<div className="aboutContainer">
                            
                            <h1>MY NAME IS BATHEN</h1>
                            <h2>IM A JUNIOR WEB DEVELOPER</h2>
                    
                            <div className="avatar"  style={{display:'none'}}>
                                <img src="https://media-exp1.licdn.com/dms/image/C5603AQGhumdvIGqCMg/profile-displayphoto-shrink_400_400/0/1566207287805?e=1633564800&v=beta&t=YGo9wRk9pANQz1cGt9__yiSR4-0C6XKsF-jZzvSxuuM" alt="profile" />
                            </div>
                            <div className="aboutContent">
                               { /* As an enthusiastic technologist with hands-on software, tools, and programming languages skills,<br/>
                                I am team player, with high self-discipline and eager to learn and develop. <br/> able to effectively self-manage during independent projects
                                I am well positioned to leverage my abilities and qualifications to thrive as Front-End Developer.           */}
                                As an enthusiastic and creative autodidact, with hands-on programming skills,<br/>
                                I am looking for an oppertunity to practice my abilities and qualifications as a Front-End Developer.                           
                            </div>
                            <div className="skills">
                                HTML | CSS | BOOTSTRAP | JAVASCRIPT | NODEJS | EXPRESS | REACT | MONGODB | SQL 
                            </div>
                            
                            
                            <button className="resumeBtn"> <a href={cv} download>GET MY RESUME</a></button>
                            </div>)
                    :
                         <div className="hello">HELLO</div>
            }
        </div>
    )
}

export default About;