import React, {Component} from 'react'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { Provider } from 'react-redux'
import { ApolloProvider } from "react-apollo"
import store from './src/store'
import client from './src/client'
import AppNavigator from './src/screens/Navigator'

const AppContainer = createAppContainer(AppNavigator)
console.disableYellowBox = true;


export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </ApolloProvider>
    )
  }
}

