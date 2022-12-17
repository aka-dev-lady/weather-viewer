import ServiceRequest from '../services/serviceRequest.js';
export const state = () => ({
  cities: ['London', 'Paris', 'Kiev', 'Berlin', 'Rome', 'Dnipropetrovsk', 'Prague', 'Sofia', 'Warsaw', 'Burgas', 'Varna'],
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
    let myLocation = window.sessionStorage.getItem('sessionLocation');
    if(!myLocation) {
      myLocation = window.localStorage.getItem('myLocation');
    }
    if(!myLocation) {
      const rand = Math.floor(Math.random()*getters.cities.length);
      myLocation = getters.cities[rand];
    }
    const time = Date.now();
    for(let key of getters.cities) {
      const timeRequest = window.localStorage.getItem(key);
      if(timeRequest) {
        const timeDifference = time - timeRequest;
        if(timeDifference >= 3600000) {
          window.localStorage.removeItem(key);
          window.localStorage.removeItem(`lastRequest${key}`)
        }
      }
    }
    dispatch('setCurrentCity', myLocation)
  },
  setCurrentCity({commit, dispatch}, currentCity) {
    window.sessionStorage.setItem('sessionLocation', currentCity);
    commit('setCity', currentCity);
    dispatch('setCurrentWeather', currentCity);
  },
  async setCurrentWeather({commit}, currentCity) {
    try{
      let currentWeather;
      const time = Date.now();
      const timeRequest = window.localStorage.getItem(currentCity);
      const timeDifference = time - timeRequest;
      if(timeRequest && (timeDifference < 3600000)){
        currentWeather = JSON.parse(window.localStorage.getItem(`lastRequest${currentCity}`));
      } else {
        currentWeather = await ServiceRequest.getWeatherByCity(currentCity);
        if(currentWeather) {
          window.localStorage.setItem(`lastRequest${currentCity}`, JSON.stringify(currentWeather));
          window.localStorage.setItem(currentCity, time);
        }
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
  }
}