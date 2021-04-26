class Volume{
    constructor(){
        this.music1 = document.getElementById("music1");
        this.music1.volume = 50/100;

        this.volumeValue = document.getElementById("volumeValue");
        this.volumeValue.addEventListener("input" , ()=>{
        this.music1.volume = this.volumeValue.value / 100;
        });

        this.speedValue = document.getElementById("speedValue");
        this.music1.playbackRate = 1;
        this.speedValue.addEventListener("input" , ()=>{
        this.music1.playbackRate = this.speedValue.value / 100;
        });
    }
}
onload = new Volume();