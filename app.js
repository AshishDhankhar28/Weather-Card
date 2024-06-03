const apiURl="https://api.openweathermap.org/data/2.5/weather?appid=b2190cd2c6933fdf859ac4afd271974d&units=metric&q=";
const search= document.querySelector(".search");
const button=document.querySelector("#button");
const weather=document.querySelector(".picture");

async function checkWeather(city){
    const response = await fetch (apiURl+city);
    var data=await response .json();
    console .log(data);

    if(response.status == 404){
        document.querySelector(".valid").style.display="block";
        document.querySelector(".condition").style.display="none";
    }
    else{
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
        document.querySelector(".Humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".Wind").innerHTML=data.wind.speed+"km/hr";

        if(data.weather[0].main=="Clouds"){
            weather.src="images/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weather.src="images/clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            weather.src="images/rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weather.src="images/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            weather.src="images/mist.png";
        }
        document.querySelector(".condition").style.display="block";
        document.querySelector(".valid").style.display="none";

    }   
}


button.addEventListener('click',()=>{
    checkWeather(search.value);
})


document.addEventListener('keypress', function (e){
    if(e.key==='Enter'){
        checkWeather(search.value);
    }   
})
