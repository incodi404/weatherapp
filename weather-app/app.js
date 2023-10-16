let defaultCity = "Darjeeling"
let searchVal = ""
const search = document.getElementById('search')
search.addEventListener('input', function(e){
    searchVal = search.value
    display(searchVal)
})
let city
function display(searchVal) {
    city = defaultCity
    if(searchVal) {
        city = searchVal
    }
    else {
        city = defaultCity
    }
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}&alerts=yes`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b0fcbcb465mshbbafe00862d6efdp105f35jsnffbfce775c8c',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    let data
    
    fetch(url,options)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
        temp.innerHTML = data.current.temp_c
        place.innerHTML = `${data.location.name}, ${data.location.region}, ${data.location.country}`
        weather_situ.innerHTML = data.current.condition.text
        feels_li.innerHTML =  data.current.feelslike_c
        cloud.innerHTML = data.current.cloud
        humidity.innerHTML = data.current.humidity
        wind_speed.innerHTML = data.current.wind_kph
        pressure.innerHTML = data.current.pressure_in
    })
    .catch((error) => console.log(error))
}