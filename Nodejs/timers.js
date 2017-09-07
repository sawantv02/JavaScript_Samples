var waitTime=3000;
var currentTime=0;
var waitInterval=10;
var percent=0;


function writeWaitingPercent(p){
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(`waiting......${p}%`);
}

var interval=setInterval(function(){
	
	currentTime+=waitInterval;
	percent=Math.floor((currentTime/waitTime)*100);
	writeWaitingPercent(percent);
},waitInterval);

setTimeout(function(){
	clearInterval(interval);
	writeWaitingPercent(100);
	console.log("\n\ndone\n\n");
},waitTime);

process.stdout.write("\n\n");
writeWaitingPercent(percent);