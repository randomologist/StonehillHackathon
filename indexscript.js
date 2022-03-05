//jQuery library is being used to streamline the coding process
//Leaflet.js library is being used to display an interactible map with markers
$(document).ready(function(){
  //Reused code from a previous project (lines 7-11)
  var mymap = L.map('mapid').setView([25, 30], 5);
  var OpenStreetMap_Mapnik =  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	  maxZoom: 19,
	  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mymap);

  //Determines if the school names and coordinates are synced or not
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

  //Creates the icon for the user's address
  var myIcon = L.icon({
    iconUrl: 'marker-icon.png',
    iconSize: [25, 40],
    iconAnchor: [14, 39],
    popupAnchor: [-1, -32],
    shadowUrl: 'marker-shadow.png',
    shadowSize: [68, 95],
    shadowSize: [41, 41],
    shadowAnchor: [13, 40]
  });

  let markerAdded = false;
  let m_iuYou = L.marker([0,0],{icon:myIcon});
  let getVal;
  var myLocation;
  var myLat;
  var myLon;
  var myDistance = [];
  var closestSchools = [];
  
  //Finds the user's address and adds a marker
  $("#locateButton").click(function(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocator is not supported on your device.\nالموقع الجغرافي غير مدعوم على جهازك.")
    }
    function showPosition (position) {
      if (markerAdded == false) {
        myLocation = L.latLng(position.coords.latitude,position.coords.longitude)
        m_iuYou.setLatLng(myLocation).addTo(mymap);
        m_iuYou.bindPopup("<center><b>أنت<br>You</b></center>");
        markerAdded = true;
      } else {
        myLocation = L.latLng(position.coords.latitude,position.coords.longitude)
        m_iuYou.setLatLng(myLocation);
      }
    }
  });

  //Allows the user to input an address, and adds a marker
  $("#inputLoc").click(function(){
    if ($("#location").val() == '') {
      alert("Please input your address\nالرجاء إدخال عنوانك");
    } else {
      address = $("#location").val();
      var coordInput
      var answer
      var dataRange = []
      $.get(location.protocol + '//nominatim.openstreetmap.org/search?format=json&q='+address, function (data) {
        if (data.length > 1) {
          var placeList = []
          var sentence = "Which is your requested choose from 1 to " + String(data.length) + ":\n" + "الذي هو المطلوب اختر من 1 إلى" + " " + String(data.length) + ":"
          for (let i=0; i<data.length; i++) {
            dataRange.push(i+1);
            placeList[i] = data[i].display_name;
            sentence = sentence + "\n \n" + (i+1) + '. ' + placeList[i];
          }
          function check(mode){
            answer = prompt(sentence);
            for (let i=0; i<data.length; i++) {
              if (answer == dataRange[i]) {
                return
              }
            }
            if (mode == 0) {
              sentence = "You need to choose a location.\nتحتاج إلى اختيار الموقع.\n" + sentence;
            }
            check(1);
          }
          check(0);
        } else {
          answer = 0;
        }
        if (markerAdded == false) {
          myLat = data[answer-1].lat
          myLon = data[answer-1].lon
          myLocation = [myLat,myLon];
          m_iuYou.setLatLng(myLocation).addTo(mymap);
          m_iuYou.bindPopup("<center><b>أنت<br>You</b></center>");
          markerAdded = true;
        } else {
          myLat = data[answer-1].lat
          myLon = data[answer-1].lon
          myLocation = [myLat,myLon];
          m_iuYou.setLatLng(myLocation);
        }
      });
    }
  });
  
  $("#closeness").click(function(){
    if (markerAdded == false) {
      alert("Please input your address or press \"Find My Location\".\nالرجاء إدخال عنوانك أو الضغط على \" البحث عن موقعي\".");
    } else {
      myDistance = []
      for (let i=0,x=0; i<schoolInfo.englishName.length; i++){
        x = i*2;
        sLocation = L.latLng(schoolInfo.coords[x], schoolInfo.coords[x+1]);
        myLocation = L.latLng(myLat, myLon);
        myDistance.push(myLocation.distanceTo(sLocation));
        schoolInfo.distances.push(myLocation.distanceTo(sLocation));
      }
      myDistance.sort(function(a, b){return a - b});
      for (let x=0; x<5; x++) {
        for (let i=0; i<schoolInfo.englishName.length; i++) {
          if (myDistance[x] == schoolInfo.distances[i]) {
            closestSchools.push(schoolInfo.arabicName[i] + "\n" + schoolInfo.englishName[i]);
            console.log(schoolInfo.englishName[i]);
          }
        }
      }
    }
  });
});