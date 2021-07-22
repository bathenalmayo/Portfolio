import React from "react";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
    return (
        <div className="about">
            <h1>HI,
            My name is Bathen</h1>
            <p>Im a junior web/fullstack developer..</p>
            <ul>חלק מהיכולות שלי..
                <li>יכולות למידה עצמית ומהירה</li>
                <li>עבודת צוות</li>
                <li>אחראית, בעלת משמעת עצמית גבוהה</li>
                <li></li>
                <li></li>

            </ul>
            <ThemeProvider theme={theme}>
            <Button>GET MY RESUME</Button>
            </ThemeProvider>
            
        </div>
    )
}

export default About;