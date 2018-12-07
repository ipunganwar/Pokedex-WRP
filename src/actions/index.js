import { queryAllPokemons } from '../client'

export const GetPokemons = () => {
    return dispatch => {
      (async function(){
        const response = await queryAllPokemons()
        dispatch(SetPokemons(response.data))
      })()
    }
}

const SetPokemons = (currentPokemon) => {
  return {
    type: 'SetPokemons',
    payload: currentPokemon
  }
}