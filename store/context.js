import ServiceRequest from '../services/serviceRequest.js';
export const state = () => ({
  cities: ['London', 'Paris', 'Kiev', 'Berlin', 'Rome', 'Dnipropetrovsk'],
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
  initCurrentCity({commit, getters, dispatch}) {
    const myLocation = window.localStorage.getItem('myLocation');
    const cities = getters.cities;
    const rand = Math.floor(Math.random()*cities.length);
    const city = myLocation || cities[rand];
    commit('setCity', city);
    dispatch('setWeather', city);
  },
  setCurrentCity({commit, dispatch}, currentCity) {
    commit('setCity', currentCity);
    dispatch('setWeather', currentCity);
  },
  async setWeather({commit}, currentCity) {
    const currentWeather = await ServiceRequest.getWeatherByCity(currentCity);
    console.log(currentWeather);
    commit('setWeather', currentWeather);
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