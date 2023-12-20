
let cityName = document.getElementById("cityName")
let searchBtn =document.getElementById("searchBtn")
let weatherContainer = document.getElementById("weatherContainer")

let City = document.querySelector(".city")
// let Details = document.querySelector(".details")
let Temp = document.querySelector(".temp")
let Humidity = document.querySelector(".humidity")
let Wind = document.querySelector(".wind")

let weatherIcon = document.getElementById("weatherIcon") 

const apiKey = `xyz`;
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
    // Details.innerHTML = data.weather[0].description;
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
