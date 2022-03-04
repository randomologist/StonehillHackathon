//jQuery library is being used to streamline the coding process
$(document).ready(function(){

  //Reused code from a previous project (lines 5-10)
  var mymap = L.map('mapid').setView([29.72, -95.4], 9);

  var OpenStreetMap_Mapnik =  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	  maxZoom: 19,
	  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mymap);
  
});