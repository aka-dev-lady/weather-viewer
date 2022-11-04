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
    const myLocation = window.localStorage.getItem('myLocation');
    const cities = getters.cities;
    const rand = Math.floor(Math.random()*cities.length);
    const city = myLocation || cities[rand];
    dispatch('setCurrentCity', city)
  },
  setCurrentCity({commit, dispatch}, currentCity) {
    commit('setCity', currentCity);
    dispatch('setWeather', currentCity);
  },
  async setWeather({commit}, currentCity) {
    try{
      let currentWeather;
      const time = new Date().getUTCHours();
      const timeRequest = window.localStorage.getItem(`timeRequest${currentCity}`);
      const timeDifference = time - timeRequest;
      if(timeRequest && (timeDifference === 0)){
        currentWeather = JSON.parse(window.localStorage.getItem(`lastRequest${currentCity}`));
        console.log(currentWeather);
      } else {
        currentWeather = await ServiceRequest.getWeatherByCity(currentCity);
        console.log(currentWeather);
        window.localStorage.setItem(`lastRequest${currentCity}`, JSON.stringify(currentWeather));
        window.localStorage.setItem(`timeRequest${currentCity}`, time);
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