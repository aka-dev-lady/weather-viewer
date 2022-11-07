const axios = require("axios");
async function getWeatherByCity(city) {
try {
  const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
  params: {q: city, days: '7'},
  headers: {
    'X-RapidAPI-Key': '89fa60df72msh42b698c3cdb9237p1cf560jsnc6add0a53c8f',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }};
  let response = await axios.request(options)
  return response.data
} catch(error) {
  console.error(error);
}
  }
export default {
  getWeatherByCity
}
