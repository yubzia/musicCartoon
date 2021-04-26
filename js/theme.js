class ThemeColor{
    constructor(){
        this.darkbtn = document.getElementById("darkbtn");
        this.darkbtn.addEventListener("click" , ()=>{
            this.themeColor("darkColor");
        });

        this.lightbtn = document.getElementById("lightbtn");
        this.lightbtn.addEventListener("click" , ()=>{
            this.themeColor("lightColor");
        });
        onload = localStorage.getItem("Dark");

        if (localStorage.getItem("Theme")==null){}
        this.themeColor(localStorage.getItem("Theme"));
    }
    themeColor(color){
        if (color == "darkColor") {
            document.body.style.background = "rgb(21, 25, 48)";
            document.getElementById("header").style.boxShadow = "none";
            document.getElementById("container").style.boxShadow = "none";
        }
        else if (color == "lightColor") {
            document.body.style.background = "white";
            document.getElementById("header").style.boxShadow = "0 0 6px 1px rgba(206, 206, 206, 0.521)";
            document.getElementById("container").style.boxShadow = "0 0 4px 1px rgba(202, 193, 193, 0.555)";
        }
        localStorage.setItem("Theme" , color);
    }
}
onload = new ThemeColor();