/* eslint-disable react/jsx-no-comment-textnodes */
import React,{useState} from "react";

function Header() {
    const [isMouseOver, setMouseOver] = useState(false);
    
    return (
        <header>
            <h1> Bathen's Portfolio</h1>
            <div className="header-links">
                <span > ABOUT </span>
                <span > PROJECTS </span>
                <span > CONTACT</span>
            </div>
        </header>
    )



}
export default Header;