//jQuery library is being used to streamline the coding process
$(document).ready(function(){

  //Reused code from a previous project (lines 5-10)
  var mymap = L.map('mapid').setView([25, 30], 5);

  var OpenStreetMap_Mapnik =  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	  maxZoom: 19,
	  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mymap);

  var m_iu = L.marker([30.02506818818714, 31.42389433111902]).addTo(mymap);
  m_iu.bindPopup("<center><b>المدرسه الإنجليزيه الحديثه بالقاهرة<br>Modern English School, Cairo</center>");
  var m_iu = L.marker([30.011881959758583, 31.4333412265372]).addTo(mymap);
  m_iu.bindPopup("<center><b>مدرسة الخليج بالقاهرة<br>Gulf English School Cairo</center>");
  var m_iu = L.marker([coords]).addTo(mymap);
  m_iu.bindPopup("<center><b>arabicname<br>englishname</center>");
  var m_iu = L.marker([coords]).addTo(mymap);
  m_iu.bindPopup("<center><b>arabicname<br>englishname</center>");
  var m_iu = L.marker([coords]).addTo(mymap);
  m_iu.bindPopup("<center><b>arabicname<br>englishname</center>");
  var m_iu = L.marker([coords]).addTo(mymap);
  m_iu.bindPopup("<center><b>arabicname<br>englishname</center>");
  var m_iu = L.marker([coords]).addTo(mymap);
  m_iu.bindPopup("<center><b>arabicname<br>englishname</center>");
  var m_iu = L.marker([coords]).addTo(mymap);
  m_iu.bindPopup("<center><b>arabicname<br>englishname</center>");
  var m_iu = L.marker([coords]).addTo(mymap);
  m_iu.bindPopup("<center><b>arabicname<br>englishname</center>");
  var m_iu = L.marker([coords]).addTo(mymap);
  m_iu.bindPopup("<center><b>arabicname<br>englishname</center>");
  var m_iu = L.marker([coords]).addTo(mymap);
  m_iu.bindPopup("<center><b>arabicname<br>englishname</center>");
  var m_iu = L.marker([coords]).addTo(mymap);
  m_iu.bindPopup("<center><b>arabicname<br>englishname</center>");
  var m_iu = L.marker([coords]).addTo(mymap);
  m_iu.bindPopup("<center><b>arabicname<br>englishname</center>");
  var m_iu = L.marker([coords]).addTo(mymap);
  m_iu.bindPopup("<center><b>arabicname<br>englishname</center>");
  var m_iu = L.marker([coords]).addTo(mymap);
  m_iu.bindPopup("<center><b>arabicname<br>englishname</center>");
  var m_iu = L.marker([coords]).addTo(mymap);
  m_iu.bindPopup("<center><b>arabicname<br>englishname</center>");
  var m_iu = L.marker([coords]).addTo(mymap);
  m_iu.bindPopup("<center><b>arabicname<br>englishname</center>");
  var m_iu = L.marker([coords]).addTo(mymap);
  m_iu.bindPopup("<center><b>arabicname<br>englishname</center>");
  var m_iu = L.marker([coords]).addTo(mymap);
  m_iu.bindPopup("<center><b>arabicname<br>englishname</center>");
  
});