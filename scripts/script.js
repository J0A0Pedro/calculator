var bleep = new Audio();

bleep.currentTime - 0.9;

bleep.src="sounds/effect7.mp3";

var equal = new Audio();

equal.src="sounds/effect6.mp3";


var cla = new Audio();
cla.src="sounds/effect2.mp3";





const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    bgcalc: getStyle(html, "--bgcalc"),
    
}

const lightMode = {
    bg: "#fff",
    bgcalc:"#fff"
    
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(lightMode) : changeColors(initialColors)
})
















