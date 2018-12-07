import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'
import ListPokemonScreen from '../screens/ListPokemonScreen'
import Icon from '../components/HeaderIcon'


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      headerTitle: <Icon/>,
      headerStyle: styles.header
    })
  },
  Details: {
    screen: DetailScreen,
    navigationOptions: () => ({
      headerStyle: styles.header,
      headerTintColor: '#fff'
    })
  },
  ListPokemon: {
    screen: ListPokemonScreen,
    navigationOptions: () => ({
      headerTitle: < Icon/>,
      headerBackTitle: 'Back',
      headerStyle: styles.header,
      headerTintColor: '#fff'
    })
  }
})

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    shadowOffset: {width: 4, height: 2}, 
    shadowOpacity: 1, 
    shadowRadius: 5, 
    shadowColor: '#C3B9CE',
    elevation: 9
  }
})
  
  export default AppNavigator