/*
mobile friendly
icons for the summary of the temp
//round when converting
*/

var temp = document.querySelector(".weather span");
var degType = document.querySelector(".weather span:last-child");
var time = document.querySelector(".time span");
var loc = document.querySelector(".location span");
var lat, long, hours, minutes, seconds, now, cel, fah;
document.querySelector("p:nth-of-type(1) span:first-child").addEventListener("click", function(){
  toDegree();
})
document.querySelector("p:nth-of-type(1) span:last-child").addEventListener("click", function(){  
  $.ajax({
      dataType: 'json',
      url: 'http://geoip.nekudo.com/api/'
    })
    .then(function(data) {
      loc.innerHTML =  data.city + ', ' +data.country.code;
      displayWeather(data.city,data.countryCode)
    });
})


/*


document.querySelector("p:nth-of-type(3) span:first-child").addEventListener("click", function(){
  toDegree();
})
*/


function toDegree(){
 
 
  if(degType.innerHTML == "°C"){
    //T(°F) = T(°C) × 9/5 + 32
    degType.innerHTML = "&#176;F";
    fah = temp.innerHTML * 9 / 5 + 32;
    temp.innerHTML = parseFloat(fah).toFixed(2) ;
  }
  else{
    //T(°C) = (T(°F) - 32) × 5/9
    degType.innerHTML = "&#176;C";
    cel = (temp.innerHTML - 32) * 0.5556;
    temp.innerHTML = parseFloat(cel).toFixed(2);  
  }
 
}

/*show current time
setInterval(function() {
  now = new Date();
  hours = now.getHours() <10? "0"+now.getHours(): now.getHours();
  minutes = now.getMinutes() <10? "0"+now.getMinutes(): now.getMinutes();
  seconds = now.getSeconds() <10? "0"+now.getSeconds(): now.getSeconds();
  time.innerHTML =
    hours + " : " + minutes + " : " + seconds;
}, 1000);*/


$.ajax({
      dataType: 'json',
      url: 'http://geoip.nekudo.com/api/'
    })
    .then(function(data) {
      loc.innerHTML =  data.city + ', ' +data.country.code;
      displayWeather(data.city,data.countryCode)
    });

/*
try{
  $.ajax({
      dataType: 'json',
      url: 'http://ip-api.com/json'
    })
    .then(function(data) {
      loc.innerHTML = data.zip + ', ' + data.city + ', ' +data.countryCode;
      displayWeather(data.city,data.countryCode)
    });
}
catch (e) {
    try {
      $.ajax({
      dataType: 'json',
      url: 'http://freegeoip.net/json/'
    })
    .then(function(data) {
      loc.innerHTML = data.zip_code + ', ' + data.city + ', ' +data.country_code;
      displayWeather(data.city,data.country_code)
    });
     
    }
    catch (e) {
      console.log("error is : " + e +"\n\n after trying two apis");
    }
}
  */
//displayWeather("Edmonton","CA")  
 function displayWeather(city, countryCode) {
   
 
   
   
$.ajax({
              dataType: 'json',
              url: 'http://api.openweathermap.org/data/2.5/weather?q='+city+','+countryCode+'&APPID=ee35c5abccd5792b551a1bc07931be7a&units=metric'
            })
            .then(function(weather) {  
              temp.innerHTML = parseFloat(weather.main.temp).toFixed(2)   ;
            });
 
}
 

/*
  $.getJSON("https://api.darksky.net/forecast/0d9ec659c2bfe3b1f8d91754f8eace7d/" +
      lat +
      "," +
      long, function(json) {
       console.log(json);
       loc.innerHTML =  'https://twitter.com/intent/tweet?hashtags=quotes,freecodecamp,metedagsuyu&related=freecodecamp&text=' + encodeURIComponent('"' + json.slip.advice + '"');
   
  });
//get Location , lat and long
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  lat = position.coords.latitude;
  long = position.coords.longitude;

  console.log(
    "Latitude: " +
      position.coords.latitude +
      "\nLongitude: " +
      position.coords.longitude
  );
var request = new Request("https://api.darksky.net/forecast/0d9ec659c2bfe3b1f8d91754f8eace7d/" +
      lat +
      "," +
      long , {
mode: 'no-cors',
redirect: 'follow',
headers: new Headers({
'Content-Type': 'text/plain'
})
})

fetch(request).then(function(response) {
// Convert to JSON
  //JSON.parse(data)
  //+response["timezone"]
  caches.add(request, response)
  console.log("lol help? "+response)
 
return ;
})
function gettingJSON() {
  loc.innerHTML = "jquery loaded";
  $.getJSON(
 
   
    "https://api.darksky.net/forecast/0d9ec659c2bfe3b1f8d91754f8eace7d/" +
      lat +
      "," +
      long ,
    function(json) {
      loc.innerHTML = JSON.stringify(json);
    }
  );
}
*/
