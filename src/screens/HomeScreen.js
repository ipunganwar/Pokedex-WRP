import React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import { GetPokemons } from '../actions'
import { connect } from 'react-redux'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={ styles.container }>
        <Image
          resizeMode='stretch'
          source={require('../assets/pokemon.png')}
          style={styles.img}
        />
        <Text>Welcome Trainer</Text>
          <Button
            title="Go to Pokedex"
            onPress={() => {
              this.props.navigation.navigate('ListPokemon', { title: true });
            }}
          />
        </View>
      );
    }

  componentWillMount() {
    this.props.getPokemons()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  img: {
    width: 230, 
    height: 100
  }
})

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemons: () => dispatch(GetPokemons())
  }
}

export default connect(null, mapDispatchToProps)(HomeScreen)
