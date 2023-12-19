// let cityName = document.getElementById("cityName");
// let searchBtn = document.getElementById("searchBtn");
// let weatherContainer = document.getElementById("weatherContainer");

// const apiKey = `7cf0624eeabfe0564fd0b4d8cf24a1af`;
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric`;

// searchBtn.addEventListener("click", function() {
//   let city = cityName.value;
  
//   if (city.trim() !== "") {
//     getWeatherData(city);
//   } 
//   else {
//     weatherContainer.innerHTML = "Please enter a city name.";
//   }
  
// });

// function getWeatherData(city) {
//   let fullApiUrl = `${apiUrl}&q=${city}&appid=${apiKey}`;
  
//   fetch(fullApiUrl)
//     .then((response) => 
//       {
//         if (response.ok) 
//           {
//             return response.json();
//           } 
//         else 
//           {
//           throw new Error("Failed to fetch weather data");
//           }
//       })
//     .then((data) => 
//       {
//         handleWeatherData(data);
//       })
//     .catch((error) => 
//       {
//         console.error(error);
//       });
// }

// function handleWeatherData(data) {
//   const cityName = data.name;
//   const description = data.weather[0].description;
//   const temperature = data.main.temp;
//   const humidity = data.main.humidity;
//   const windSpeed = data.wind.speed;
//   weatherContainer.innerHTML = `<p>City: ${cityName}</p>
//                                 <p>Temperature: ${temperature}°C</p>
//                                 <p>Description: ${description}</p>
//                                 <p>Humidity: ${humidity}</p>
//                                 <p>Wind Speed: ${windSpeed}Kms/Hr</p>`;
// }



let cityName = document.getElementById("cityName")
let searchBtn =document.getElementById("searchBtn")
let weatherContainer = document.getElementById("weatherContainer")

const apiKey = `7cf0624eeabfe0564fd0b4d8cf24a1af`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric`;

searchBtn.addEventListener("click", function() {
  let city = cityName.value;

  if (city.trim() !== ""){
    fetchAPI(city);
  }
  else{
    weatherContainer.innerHTML = "Please enter a valid city name."
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
        weatherContainer.innerHTML = "Network Error. Try again later."
      }
    })
    .then((data)=>{
        handleWeatherData(data);
    })
    .catch((error)=>{
        console.log(error);
        weatherContainer.innerHTML = "City does not exist"
    })
}


function handleWeatherData(data) {
  const cityName = data.name;
  const description = data.weather[0].description;
  const temperature = data.main.temp;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  weatherContainer.innerHTML = `<p>City: ${cityName}</p>
                                <p>Temperature: ${temperature}°C</p>
                                <p>Description: ${description}</p>
                                <p>Humidity: ${humidity}</p>
                                <p>Wind Speed: ${windSpeed} Kms/Hr</p>`;
}
