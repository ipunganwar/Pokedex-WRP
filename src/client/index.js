import ApolloClient from 'apollo-boost'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'

const client  = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh/graphql'
})

export default client

export const queryAllPokemons = () => {
  const value =  999999999
  const query = gql `
  {
    pokemons(first: ${value}){
      number
      name
      classification
      types
      image
      weight {
        minimum
        maximum
      }
      height{
        minimum
        maximum
      }
      attacks {
        fast{
          name
          type
          damage
        }
      }
      fleeRate
      maxCP
      maxHP
    }
  }`;
  return client.query({ query: query }) 
}
