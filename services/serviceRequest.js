const axios = require("axios");
async function getWeatherByCity(city) {
  let weather;
  const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
  params: {q: city, days: '3'},
  headers: {
    'X-RapidAPI-Key': '89fa60df72msh42b698c3cdb9237p1cf560jsnc6add0a53c8f',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }};
  await axios.request(options)
    .then(res => {
      weather = res.data;
    })
    .catch(function (error) {
      console.error(error);
    })
    return weather
  }
export default {
  getWeatherByCity
}
