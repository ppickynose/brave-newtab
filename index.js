"use strict";

const store = chrome.storage.sync;


(function(){

	let dom = document.getElementById("bgimg");
  	dom.style.backgroundColor =  'WhiteSmoke';
	fetchImage();

  	function fetchImage(){
		   fetch('https://source.unsplash.com/random/1920x1080')
		  .then(resp => resp)
		  .then((imagelists) => {
		  		let selectedImage = imagelists.url;
		  	  	let dom = document.getElementById("bgimg");
		  		dom.style.backgroundImage = `url(${selectedImage})`;
		  })
		   .catch(() => {
		  		error();
		  });
  	}

  	function error(){
  		let dom = document.getElementById("bgimg");
		dom.style.backgroundColor =  'grey';
  	}


})();

(function () {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds());
            let time = h+":"+m;
        		document.getElementById('time').innerHTML = time;
        	 	setTimeout(function () {
            startTime()
        }, 500);
    }
    startTime();
})();

class Init{

	constructor() {
		this.deviceDetails = null;
		this.dateDetails = null;
	}
}

class TabAction extends Init{
	constructor(props) {
	  super(props);
	}
	setDateDetails(){
		this.dateDetails= getdateDetails();
	}
}

let tab = new TabAction;
tab.setDateDetails();
insertinDom();
function insertinDom(){
	document.getElementById('date').innerHTML = `${tab.dateDetails.day}, ${tab.dateDetails.month} ${tab.dateDetails.date}`;
}


function getdateDetails(){

	var today = new Date();
	var day = today.getDay();
	var dd = today.getDate();
	var mm = today.getMonth();
	var yyyy = today.getFullYear();
	var dL = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	return {
		day: dL[day],
		month:  mL[mm],
		date: dd,
		year : yyyy
	}

}

