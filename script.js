let cityName = document.getElementById("cityName")
let searchBtn =document.getElementById("searchBtn")

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")

let cardColor = document.getElementsByClassName("card")[0]

btn1.addEventListener("click", function () {
  cardColor.style.background = "linear-gradient(135deg,#00feba, #5b548a)";
});

btn2.addEventListener("click", function () {
  cardColor.style.background = "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,222,0.9864320728291317) 22%, rgba(252,176,69,1) 100%)";
});


btn3.addEventListener("click", function () {
  cardColor.style.background = "linear-gradient(21deg, rgba(59,235,70,1) 0%, rgba(51,122,38,1) 26%, rgba(55,129,40,1) 38%, rgba(0,0,0,0.9864320728291317) 55%, rgba(62,240,142,1) 93%)";
});

btn4.addEventListener("click", function () {
    cardColor.style.background = "linear-gradient(196deg, rgba(59,104,235,1) 11%, rgba(251,74,95,0.9864320728291317) 48%, rgba(69,223,252,1) 82%)";
});



let City = document.querySelector(".city")
let Temp = document.querySelector(".temp")
let Humidity = document.querySelector(".humidity")
let Wind = document.querySelector(".wind")

let weatherIcon = document.getElementById("weatherIcon") 

const apiKey = process.env.API_KEY || 'default_api_key';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric`;

searchBtn.addEventListener("click", function() {
  let city = cityName.value;

  if (city.trim() !== ""){
    fetchAPI(city);
  }
  else{
    City.innerHTML = "Please enter a valid city name."
  }
})

function fetchAPI(city){
  let fullApiUrl = `${apiUrl}&q=${city}&appid=${apiKey}`;
  fetch(fullApiUrl)
    .then((response) =>{
      if(response.ok){
        return response.json()  
      }
      else{
        City.innerHTML = "Network Error. Try again later."
      }
    })
    .then((data)=>{
        handleWeatherData(data);
    })
    .catch((error)=>{
        console.log(error);
        City.innerHTML = "City does not exist"
    })
}


function handleWeatherData(data) {
    City.innerHTML = data.name;
    Temp.innerHTML = Math.round(data.main.temp) + "° C";
    Humidity.innerHTML = data.main.humidity + " %";
    Wind.innerHTML = data.wind.speed + " Kms/Hr";

    console.log(data.weather[0].main)

  
  if(data.weather[0].main == "Clouds"){
    weatherIcon.src="images/clouds.png";
  }
  else if(data.weather[0].main == "Clear"){
    weatherIcon.src="images/clear.png";
  }
  else if(data.weather[0].main == "Rain"){
    weatherIcon.src="images/rain.png";
  }
  else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src="images/drizzle.png";
  }
  else if(data.weather[0].main == "Mist"){
    weatherIcon.src="images/mist.png";
  }
  else if(data.weather[0].main == "Haze"){
    weatherIcon.src="images/haze.png";
  }
  else if(data.weather[0].main == "Snow"){
    weatherIcon.src="images/snow.png";
  }
   
}
