const defaultState = {
    pokemons: []
  }
  
const Pokemons = (state = defaultState, action) => {
  switch(action.type) {
    case 'SetPokemons':
      let data = {...state, ...action.payload}
      return data
      break

    default :
      return state
      break
  }
}

export default Pokemons
  