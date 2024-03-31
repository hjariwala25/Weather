const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '52b4400ac3mshc7b70925f84dd57p170f3ejsn3b119556a710',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city)=>{
     cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise .innerHTML = response.sunrise 
        sunset.innerHTML = response.sunset
        
        
    })
    .catch(err => console.error(err));
}
const get1 = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            cloud_pct10.innerHTML = response.cloud_pct;
            temp10.innerHTML = response.temp;
            feels_like10.innerHTML = response.feels_like;
            humidity10.innerHTML = response.humidity;
            min_temp10.innerHTML = response.min_temp;
            max_temp10.innerHTML = response.max_temp;
            wind_speed10.innerHTML = response.wind_speed;
            wind_degrees10.innerHTML = response.wind_degrees;
            sunrise10.innerHTML = response.sunrise;
            sunset10.innerHTML = response.sunset;
        })
        .catch(err => console.error(err));
}

const get2 = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
        console.log(response)
        cloud_pct11.innerHTML = response.cloud_pct
        temp11.innerHTML = response.temp
        feels_like11.innerHTML = response.feels_like
        humidity11.innerHTML = response.humidity
        min_temp11.innerHTML = response.min_temp
        max_temp11.innerHTML = response.max_temp
        wind_speed11.innerHTML = response.wind_speed
        wind_degrees11.innerHTML = response.wind_degrees
        sunrise11.innerHTML = response.sunrise 
        sunset11.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
const get3 = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
        console.log(response)
        cloud_pct12.innerHTML = response.cloud_pct
        temp12.innerHTML = response.temp
        feels_like12.innerHTML = response.feels_like
        humidity12.innerHTML = response.humidity
        min_temp12.innerHTML = response.min_temp
        max_temp12.innerHTML = response.max_temp
        wind_speed12.innerHTML = response.wind_speed
        wind_degrees12.innerHTML = response.wind_degrees
        sunrise12.innerHTML = response.sunrise 
        sunset12.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
const get4 = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
        console.log(response)
        cloud_pct13.innerHTML = response.cloud_pct
        temp13.innerHTML = response.temp
        feels_like13.innerHTML = response.feels_like
        humidity13.innerHTML = response.humidity
        min_temp13.innerHTML = response.min_temp
        max_temp13.innerHTML = response.max_temp
        wind_speed13.innerHTML = response.wind_speed
        wind_degrees13.innerHTML = response.wind_degrees
        sunrise13.innerHTML = response.sunrise 
        sunset13.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
get1("Surat")
get2("Ahmedabad")
get3("Anand")
get4("Mumbai")


submit.addEventListener("click",(e)=>{
 e.preventDefault()
    getWeather(city.value)
})
getWeather("Surat")