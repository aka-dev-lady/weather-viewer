export const getWeatherByCity = city => {
  return this.$axios.request({
    params: {q: city, days: '3'}
  })
  .then(res => res.data)
  .catch(function (error) {
    console.error(error);
  })
}