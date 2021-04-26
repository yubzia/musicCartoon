var header = document.getElementById("header");
var container = document.getElementById("container");

// responsive Content in Phone

if (screen.width == 411 && screen.height == 731) {
    container.style.margin = "0px";
}else if (screen.width == 411 && screen.height == 823) {
    container.style.margin = "-40px 0 0 0";
}
else if (screen.width == 320 && screen.height == 568) {
    container.style.margin = "70px 0";
}
else if (screen.width == 414 && screen.height == 736 ||
    screen.width == 540 && screen.height == 720) {
    container.style.margin = "0";
}
else if (screen.width == 375 && screen.height == 812) {
    container.style.margin = "-36px 0";
}
else if (screen.width == 768 && screen.height == 1024) {
    container.style.margin = "-140px 0";
}
else if (screen.width == 1024 && screen.height == 1366) {
    container.style.margin = "-320px 0";
}
else if (screen.width == 280 && screen.height == 653) {
    container.style.width = "290px";
    container.style.left = "55.5%";
}

// Play Buttons Music

class Player{
    constructor(){
       this.music1 = document.getElementById("music1");
       this.titleMusic = document.getElementById("titleMusic");
       this.isPlayed;
       this.playPause_btn = document.getElementById("playPause_btn");
       this.playPause_btn.addEventListener("click" , ()=>{
           this.playPause();
       });

       this.namesMusic = [];
       this.namesMusic[0] = "Conane";
       this.namesMusic[1] = "Maokly";
       this.namesMusic[2] = "Kanas";

       this.SrcMusic = [];
       this.SrcMusic[0] = "./music/conan.mp3";
       this.SrcMusic[1] = "./music/maokly.mp3";
       this.SrcMusic[2] = "./music/kanas.mp3";
       this.server = 0;

       this.setResource();

       this.Next_Btn = document.getElementById("Next_Btn");
       this.Next_Btn.addEventListener("click" , ()=>{
           if(this.server < this.SrcMusic.length - 1){
               ++this.server;
               this.isPlayed = false;
           }
           else{
              this.server = 0;
              this.playPause();
           }
           this.setResource();
       });

       this.Back_Btn = document.getElementById("Back_Btn");
       this.Back_Btn.addEventListener("click" , ()=>{
        if(this.server > 0){
            --this.server;
            this.isPlayed = false;
        }
        else{
            this.server = this.SrcMusic.length - 1;
            this.playPause();
         }
        this.setResource();
       });
    }

    setResource(){
        this.music1.src = this.SrcMusic[this.server];
        this.titleMusic.innerHTML = this.namesMusic[this.server];
        this.playPause();
    }

    playPause(){
        if (this.isPlayed == false) {
            this.music1.play();
            this.isPlayed = true;
            this.playPause_btn.src = "./img/pause.png";

        }else{
            this.music1.pause();
            this.isPlayed = false;
            this.playPause_btn.src = "./img/play.png";
        } 
    }
}
onload = new Player();