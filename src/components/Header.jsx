import React,{useState,useRef } from "react";

function Header() {
    const [isClicked, setIsClicked] = useState(false);
    const [hadScrolled, setHadScrolled] = useState(false);
       let scrollToRef = useRef("");
   
    
    function clickHandler(btn){
        setIsClicked(true);
         console.log(btn.target.id);
         scrollToRef = document.getElementsByClassName(btn.target.id);
         console.log(scrollToRef);
         console.log(scrollToRef[0]);
         if(btn.target.id === 'projects'){
            window.scrollTo({
                behavior: "smooth",
                top: 520
            });
         }else{
            window.scrollTo({
                behavior: "smooth",
                top: scrollToRef[0].offsetTop
            });
         }
          
           
         setIsClicked(false);
    }

   
   function handleScroll(){
       setHadScrolled(true);
       if(window.scrollY === 0){
           setHadScrolled(false);
       }
       
   }
    window.addEventListener('scroll',handleScroll);

    return (
        <header  style={hadScrolled ? {backgroundColor:"black"} :  {backgroundColor:"transparent"}}>
            <div className="header_heading"> Bathen's Portfolio</div>
            <div className="header_links">
                <span ><button id="about" onClick={clickHandler}>ABOUT</button> </span>
                <span ><button id="projects" onClick={clickHandler}> PROJECTS</button> </span>
                <span ><button id="contact" onClick={clickHandler}> CONTACT</button></span>
            </div>
        </header>
    )



}
export default Header;