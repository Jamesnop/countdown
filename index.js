const endDate="15 december 2023 12:01:0 AM";
document.getElementById('end-date').innerHTML=endDate;
const inputs=document.querySelectorAll("input")
function clock(){
    const end=new Date(endDate);
    const start= new Date();
    const diff=(end-start)/1000;
    if(diff<0){
        return;
    }
    inputs[0].value=Math.floor(diff/3600/24);
    inputs[1].value=Math.floor((diff/3600)%24);
    inputs[2].value=Math.floor((diff/60)%60);
    inputs[3].value=Math.floor((diff)%60);
    
};
setInterval(() => {
    clock();
}, 1000);
var source = "tick.wav"
var audio = document.createElement("audio");
audio.loop=true;
audio.autoplay = true;
audio.load()
audio.addEventListener("load", function() { 
    audio.play(); 
}, true);
audio.src = source;

