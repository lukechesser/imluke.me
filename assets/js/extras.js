// imluke.me extras

window.onload = function () {
	
	// fullscreen script
	
	var divSite = document.getElementById('site');
	var divFullscreen = document.getElementById('fullscreen');
	var fullscreenIcon = document.getElementById('fullscreenIcon');
	
	// if browser has fullscreen API
	
	if (divSite.requestFullScreen) {
	  divFullscreen.className = ''; 
	} else if (divSite.mozRequestFullScreen) {
	  divFullscreen.className = '';
	} else if (divSite.webkitRequestFullscreen) {
	  divFullscreen.className = '';
	}
	
	function toggleFullscreen() {
	  if ((document.fullScreenElement && document.fullScreenElement !== null) ||
	  		(!document.mozFullScreen && !document.webkitIsFullScreen)) { 
		if (divSite.requestFullScreen) {
		  divSite.requestFullScreen();
		  fullscreenIcon.innerHTML = "contract";
		} else if (divSite.mozRequestFullScreen) {
		  divSite.mozRequestFullScreen();
		  fullscreenIcon.innerHTML = "contract";
		} else if (divSite.webkitRequestFullscreen) {
		  divSite.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		  fullscreenIcon.innerHTML = "contract"; 
		}
	  } else {
		if (document.cancelFullScreen) {
		  document.cancelFullScreen();
		  fullscreenIcon.innerHTML = "expand";
		} else if (document.mozCancelFullScreen) {
		  document.mozCancelFullScreen();
		  fullscreenIcon.innerHTML = "expand"
		} else if (document.webkitExitFullscreen) {
		  document.webkitExitFullscreen();
		  fullscreenIcon.innerHTML = "expand"
		}
	  }
	}
	
	divFullscreen.onclick = function () {
		toggleFullscreen();
		
	};
	
};