import React from "react";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import jsPDF from "jspdf";
import cv from "//public/cv.pdf";

function About() {
  
    const theme = createTheme({
        overrides: {
          // Style sheet name ⚛️
          MuiButton: {
            // Name of the rule
            text: {
              // Some CSS
              background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
              borderRadius: 3,
              border: 0,
              color: 'white',
              height: 48,
              padding: '0 30px',
              boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            },
          },
        },
      });

      function download(){
        console.log("clicked!");
        const pdfFile = new jsPDF('p','pt','a4');
        //pdfFile.addPage();
        pdfFile.save(cv);
      }
    return (
        <div className="about">
           
            <ThemeProvider theme={theme}>
            <Button >GET MY RESUME</Button>
            </ThemeProvider>
            <button onClick={download} style={{color:"white"}}>cv</button>
            
        </div>
    )
}

export default About;