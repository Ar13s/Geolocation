//*Geolocation*//
// Ensure the browser is geolocation enabled
if('geolocation' in navigator){
   console.log("Geolocation is supported!");
}
else{
   console.log("This browser is not geolocation enabled.");
}

var options = {
    // enableHighAccuracy = true: more accurate result, false: less accurate
   enableHighAccuracy: true,
    // timeout = how long does the device have, (milliseconds) to return a result?
   timeout: 5000,
    // maximumAge = max age for a possible cached position. 0 = returns current position
   maximumAge: 0
};
// call getCurrentPosition()
navigator.geolocation.getCurrentPosition(success, error, options);
// upon success, do this
function success(pos){
    // get longitude and latitude from the position object passed in
   lng = pos.coords.longitude;
   lat = pos.coords.latitude;
    // Log location coordinates to the console
   console.log(lng + " " + lat); // <-- Will display your current longitude and latitude on the console

// ALL DATA THAT HAS TO DO WITH LOCATION MUST BE ENTERED WITHIN THE SUCCESS BRACKETS

};
