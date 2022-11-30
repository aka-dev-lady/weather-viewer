export const state = () => ({
  cities: ['Kyiv', 'Lviv', 'Dnipropetrovsk'],
  colors: ['red', 'blue', 'yellow']
})

export const getters = {
  cities: s => s.cities
}