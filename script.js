const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '52b4400ac3mshc7b70925f84dd57p170f3ejsn3b119556a710',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://api.weatherapi.com/v1/current.json?key=9aa2bf59f483498da7261639242007&q=' + city, options)
        .then(response => response.json())
        .then(response => {
            const data = response.current;
            cloud_pct.innerHTML = data.cloud;
            temp.innerHTML = data.temp_c;
            temp2.innerHTML = data.temp_c;
            feels_like.innerHTML = data.feelslike_c;
            humidity.innerHTML = data.humidity;
            humidity2.innerHTML = data.humidity;
            heat_index.innerHTML = data.heatindex_c; 
            pressure.innerHTML = data.pressure_mb;   
            wind_speed.innerHTML = data.wind_kph;
            wind_speed2.innerHTML = data.wind_kph;
            wind_degrees.innerHTML = data.wind_degree;
            gust.innerHTML = data.gust_kph;  
            dewpoint.innerHTML = data.dewpoint_c;  // Not provided in API response
        })
        .catch(err => console.error(err));
};

const get1 = (city) => {
    fetch('https://api.weatherapi.com/v1/current.json?key=9aa2bf59f483498da7261639242007&q=' + city, options)
        .then(response => response.json())
        .then(response => {
            const data = response.current;
            cloud_pct10.innerHTML = data.cloud;
            temp10.innerHTML = data.temp_c;
            feels_like10.innerHTML = data.feelslike_c;
            humidity10.innerHTML = data.humidity;
            heat_index10.innerHTML = data.heatindex_c;  
            pressure10.innerHTML = data.pressure_mb;  
            wind_speed10.innerHTML = data.wind_kph;
            wind_degrees10.innerHTML = data.wind_degree;
            gust10.innerHTML = data.gust_kph;  
            dewpoint10.innerHTML = data.dewpoint_c;  // Not provided in API response
        })
        .catch(err => console.error(err));
};

const get2 = (city) => {
    fetch('https://api.weatherapi.com/v1/current.json?key=9aa2bf59f483498da7261639242007&q=' + city, options)
        .then(response => response.json())
        .then(response => {
            const data = response.current;
            cloud_pct11.innerHTML = data.cloud;
            temp11.innerHTML = data.temp_c;
            feels_like11.innerHTML = data.feelslike_c;
            humidity11.innerHTML = data.humidity;
            heat_index11.innerHTML = data.heatindex_c;  
            pressure11.innerHTML = data.pressure_mb;  
            wind_speed11.innerHTML = data.wind_kph;
            wind_degrees11.innerHTML = data.wind_degree;
            gust11.innerHTML = data.gust_kph;  
            dewpoint11.innerHTML = data.dewpoint_c;  // Not provided in API response
        })
        .catch(err => console.error(err));
};

const get3 = (city) => {
    fetch('https://api.weatherapi.com/v1/current.json?key=9aa2bf59f483498da7261639242007&q=' + city, options)
        .then(response => response.json())
        .then(response => {
            const data = response.current;
            cloud_pct12.innerHTML = data.cloud;
            temp12.innerHTML = data.temp_c;
            feels_like12.innerHTML = data.feelslike_c;
            humidity12.innerHTML = data.humidity;
            heat_index12.innerHTML = data.heatindex_c;  
            pressure12.innerHTML = data.pressure_mb;  
            wind_speed12.innerHTML = data.wind_kph;
            wind_degrees12.innerHTML = data.wind_degree;
            gust12.innerHTML = data.gust_kph;  
            dewpoint12.innerHTML = data.dewpoint_c;  // Not provided in API response
        })
        .catch(err => console.error(err));
};

const get4 = (city) => {
    fetch('https://api.weatherapi.com/v1/current.json?key=9aa2bf59f483498da7261639242007&q=' + city, options)
        .then(response => response.json())
        .then(response => {
            const data = response.current;
            cloud_pct13.innerHTML = data.cloud;
            temp13.innerHTML = data.temp_c;
            feels_like13.innerHTML = data.feelslike_c;
            humidity13.innerHTML = data.humidity;
            heat_index13.innerHTML = data.heatindex_c;  
            pressure13.innerHTML = data.pressure_mb;  
            wind_speed13.innerHTML = data.wind_kph;
            wind_degrees13.innerHTML = data.wind_degree;
            gust13.innerHTML = data.gust_kph;  
            dewpoint13.innerHTML = data.dewpoint_c;  // Not provided in API response
        })
        .catch(err => console.error(err));
};

get1("Surat");
get2("Ahmedabad");
get3("Anand");
get4("Mumbai");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});
getWeather("Surat");
