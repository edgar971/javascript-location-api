/* load site default js */
//@prepros-prepend components/template/_jquery.js
//@prepros-prepend components/template/default.js

/* load project js 
	
*/
$(window).load(function(){
	if(navigator.geolocation) {
		console.log("Geo Location API is available");
		
		//get the users location coords
		navigator.geolocation.getCurrentPosition(function(location){
			//do something 
			console.log(location);
		})
	}
	
});