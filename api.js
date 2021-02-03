document.getElementById("city-search").addEventListener("click",function(){
    let inputCity = document.getElementById("input-city").value;
    getWeather(inputCity);
    inputCity = document.getElementById("city-input").value = ""
})
function getWeather(cityName){
    const link =  "http://api.openweathermap.org/data/2.5/weather?q="+cityName +"&units=metric&appid=08d2aab4fa37faf712b2e914cbe92b0d";
    fetch(link)
.then(res => res.json())
.then(data => {
    const weatherInfo = data.main;
    document.getElementById("temp").innerText = weatherInfo.temp;
    const city = data.name;
    document.getElementById("city-name").innerText = city;
    document.getElementById("situation").innerText = data.weather[0].main;
})
}