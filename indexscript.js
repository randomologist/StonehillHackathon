//jQuery library is being used to streamline the coding process
//Leaflet.js library is being used to display an interactible map with markers


$(document).ready(function(){
  //Reused code from a previous project (lines 5-10)
  var mymap = L.map('mapid').setView([25, 30], 5);
  
  var OpenStreetMap_Mapnik =  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	  maxZoom: 19,
	  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mymap);
  
  if (schoolInfo.englishName.length != schoolInfo.arabicName.length || schoolInfo.englishName.length != schoolInfo.coords.length/2 || schoolInfo.arabicName.length != schoolInfo.coords.length/2) {
    alert("SchoolNames.js is out of sync!");
  } else {
    //Loops through the schoolInfo object in SchoolNames.js and creates a marker for each school
    for (let i=0,x=0; i < schoolInfo.englishName.length; i++) {
      x=i*2;
      var m_iu = L.marker([schoolInfo.coords[x], schoolInfo.coords[x+1]]).addTo(mymap);
      m_iu.bindPopup("<center><b>" + schoolInfo.arabicName[i] + "<br>" + schoolInfo.englishName[i] + "</center>");
    }
  }

  var myIcon = L.icon({
    iconUrl: 'my-icon.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
  });
  
  let getVal;
  var myLocation;
  $("#locateButton").click(function(){
    return
  });
  
  $("#inputLoc").click(function(){
    address = $("#location").val();
    var coordInput
    var answer
    $.get(location.protocol + '//nominatim.openstreetmap.org/search?format=json&q='+address, function (data) {
      if (data.length > 1) {
        var placeList = []
        var sentence = "Which is your location choose from 1 to " + String(data.length) + ":"
        for (let i = 0; i<data.length; i++) {
          placeList[i] = data[i].display_name
          sentence = sentence + "\n \n" + placeList[i]
        }
        answer = prompt(sentence)
      } else {
        answer = 0
      }
      var m_iu = L.marker([data[answer-1].lat,data[answer-1].lon], {icon:myIcon}).addTo(mymap);
      m_iu.bindPopup("<b>You</b>");
    });
  });
});