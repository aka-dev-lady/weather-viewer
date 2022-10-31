export const state = () => ({
  cities: ['London', 'Paris', 'Kiev', 'Berlin'],
  city: ''
})

export const mutations = {
  setCity(state, city) {
    state.city = city
  }
}

export const actions = {
  randomCity({commit}) {
    const rand = Math.floor(Math.random()*this.cities.length);
    const city = this.cities[rand];
    commit('setCity', city)
  }
}

export const getters = {
    cities: s => s.cities,
    getCity() {
      return state.city
  }
}