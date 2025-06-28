const display=document.getElementById("display");
let timer=null;
let startTime=0;
let elapsedTime=0;
let isRunning=false;
function start(){
   if(!isRunning){//if it is true then only it will start the if block but it does so !isrunning so after true it becomes false so it stops running
    startTime=Date.now()-elapsedTime;//it takes the current time stamp and fines the time of stop to go back to the start tiime
    timer=setInterval(update,10);//it updates 10 milliseconds in each time
    isRunning=true;//gets assigned to true
   }
}
function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime=Date.now()-startTime;//keeps in of the time stamp and elapsed time
        isRunning=false;
    }

}
function reset(){
clearInterval(timer);
startTime=0;
elapsedTime=0;
isRunning=false;
display.textContent="00:00:00:00";

}
function update(){
    const currentTime=Date.now();
    elapsedTime=currentTime-startTime;//we calcuate how mush time has elapsed from start and uset that t extract hoursr minutes seconds and milliseconds
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));//gives the hours
    let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));//removes the hours by modulus then gives the minutes
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);//removes the minutes then gives the seconds
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);//removes the seconds the gives the milliseconds
    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    milliseconds=String(milliseconds).padStart(2,"0");

    display.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`

}
