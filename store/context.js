import ServiceRequest from '../services/serviceRequest.js';
export const state = () => ({
  cities: ['London', 'Paris', 'Kiev', 'Berlin', 'Rome', 'Dnipropetrovsk', 'Prague', 'Sofia', 'Washington', 'Warsaw'],
  city: '',
  weather: {}
})

export const mutations = {
  setCity(state, currentCity) {
    state.city = currentCity;
  },
  setWeather(state, currentWeather) {
    state.weather = currentWeather || {};
  }
}

export const actions = {
  initCurrentCity({getters, dispatch}) {
    let myLocation = window.localStorage.getItem('myLocation');
    if(!myLocation) {
      const cities = getters.cities;
      const rand = Math.floor(Math.random()*cities.length);
      myLocation = cities[rand];
    }
    dispatch('setCurrentCity', myLocation)
  },
  setCurrentCity({commit, dispatch}, currentCity) {
    commit('setCity', currentCity);
    dispatch('setWeather', currentCity);
  },
  async setWeather({commit}, currentCity) {
    try{
      let currentWeather;
      const time = Date.now();
      const timeRequest = window.localStorage.getItem(currentCity);
      const timeDifference = time - timeRequest;
      if(timeRequest && (timeDifference <= 3600000)){
        currentWeather = JSON.parse(window.localStorage.getItem(`lastRequest${currentCity}`));
        console.log(currentWeather);
      } else {
        currentWeather = await ServiceRequest.getWeatherByCity(currentCity);
        console.log(currentWeather);
        window.localStorage.setItem(`lastRequest${currentCity}`, JSON.stringify(currentWeather));
        window.localStorage.setItem(currentCity, time);
      }
      commit('setWeather', currentWeather);
    }catch(error) {
      console.error(error);
    }
  },
  setMyLocationToLocalStorage({dispatch}, nameLocation) {
    window.localStorage.setItem('myLocation', nameLocation);
    dispatch('setCurrentCity', nameLocation)
  }
}

export const getters = {
  cities: s => s.cities,
  getCity(state) {
    return state.city
  },
  getWeather(state) {
    return state.weather || {}
  },
  getWeatherIconUrl(state) {
    return state.weather.current?.condition?.icon ? `https:${state.weather.current?.condition?.icon}` : "#"
  }
}