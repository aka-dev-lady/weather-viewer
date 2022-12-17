export const state = () => ({
  cities: ['Kyiv', 'Lviv', 'Dnipropetrovsk']
})

export const getters = {
  cities: s => s.cities
}