import { useEffect, useState } from "react";

const ThemeToggle=()=>{
    const [currentTheme, setCurrentTheme] = useState("light")
    const themes = {
        light: {
            primaryColor: "#005166",
            inputBorder: "#dadada",
            lightText: "#aaaaaa",
            bodyColor: "#ffffff",
            textColor: "#131419",
            summaryBg: "#fafafa",
            validInput:"#F2F6F7",
            validInputBorder:"#507A88",
            errorInput:"#f8f6f6",
            errorInputBorder:"#D4A092",
            errorText:"#bb5033",
            cardBorderColor: "transparent"
        },
        dark: {
            primaryColor: "#00B2E0",
            inputBorder: "#525252",
            lightText: "#aaaaaa",
            bodyColor: "#25262B",
            textColor: "#ffffff",
            summaryBg: "#131419",
            validInput:"#3f4141",
            validInputBorder:"#507A88",
            errorInput:"#313131",
            errorInputBorder:"#D4A092",
            errorText:"#f16a45",
            cardBorderColor: "#00b3e04c"
        },
    };

function setColors() {
    let body = document.querySelector("#root");
    body.style.setProperty("--body-color", themes[currentTheme].bodyColor);
    body.style.setProperty("--primary-color", themes[currentTheme].primaryColor);
    body.style.setProperty("--light-text", themes[currentTheme].lightText);
    body.style.setProperty("--summary-bg", themes[currentTheme].summaryBg);
    body.style.setProperty("--text-color", themes[currentTheme].textColor);
    body.style.setProperty("--input-border", themes[currentTheme].inputBorder);
    body.style.setProperty("--valid-input", themes[currentTheme].validInput);
    body.style.setProperty("--valid-input-border", themes[currentTheme].validInputBorder);
    body.style.setProperty("--error-input", themes[currentTheme].errorInput);
    body.style.setProperty("--error-input-border", themes[currentTheme].errorInputBorder);
    body.style.setProperty("--error-text", themes[currentTheme].errorText);
    body.style.setProperty("--card-border-color", themes[currentTheme].cardBorderColor);
}

useEffect(()=>{
    setColors()
    console.log("Check Changed to "+currentTheme)
},[currentTheme])
    return (
        <div className="sm-card__toggle">
            <input type="checkbox" id="cb" onChange={
                (e)=>{
                    e.target.checked?setCurrentTheme("dark"):setCurrentTheme("light");
                    console.log(e.target.checked);
                }
            }/>
            <label htmlFor="cb" className="switch" 
            onClick={(e)=>{
                console.log("Theme Switch Clicked")
            }}>
                <span className="slider round"></span>
            </label>
    </div>       
    )
}

export default ThemeToggle