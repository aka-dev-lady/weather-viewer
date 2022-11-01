export const state = () => ({
  cities: ['London', 'Paris', 'Kiev', 'Berlin', 'Roma', 'Dnipropetrovsk'],
  city: ''
})

export const mutations = {
  initCity(state, city) {
    state.city = city
  },
  setCity(state, currentCity) {
    state.city = currentCity
  }
}

export const actions = {
  initCurrentCity({commit}) {
      const rand = Math.floor(Math.random()*this.getters['context/cities'].length);
      const city = this.getters['context/cities'][rand];
    commit('initCity', city)
  },
  setCurrentCity({commit}, currentCity) {

    commit('setCity', currentCity)
  }
}

export const getters = {
    cities: s => s.cities,
    getCity(state) {
      return state.city
  }
}