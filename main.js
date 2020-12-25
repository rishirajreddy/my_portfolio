let themeDots = document.querySelectorAll(".theme-dot");
let theme =localStorage.getItem("theme");

if(theme === null) {
    setTheme("light");
}
else {
    setTheme(theme);
}
for(let i=0;i<themeDots.length;i++) {
    themeDots[i].addEventListener("click",function()  {
        let mode = this.dataset.mode;
        setTheme(mode);
    })
}

function setTheme(mode) {
    if(mode === "light") {
        document.querySelector("#theme-style").href = "index.css";
    }
    else {
        document.querySelector("#theme-style").href = "dark.css";
    }
    localStorage.setItem("theme",mode);
}