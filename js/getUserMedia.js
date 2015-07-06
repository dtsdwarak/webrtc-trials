navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

//Constraints for MediaStreamAPI
var constraints = {audio: false,video:true};

//Selecting the video block from DOM
var video = document.querySelector("video");

function successCallback(stream){
	window.stream = stream;
	if(window.URL){
		//For Chrome
		video.src = window.URL.createObjectURL(stream);
	}
	else{
		//For Firefox
		video.src = stream;
	}
	video.play();
}

function errorCallback(error){
	console.log("navigator.getUserMedia error!");
}

navigator.getUserMedia(constraints,successCallback,errorCallback);