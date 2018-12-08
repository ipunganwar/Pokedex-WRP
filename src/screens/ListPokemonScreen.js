import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, RefreshControl, StyleSheet } from 'react-native';
import { GetPokemons } from '../actions'
import { connect } from 'react-redux'
import ModalDropdown from 'react-native-modal-dropdown';

class ListPokemonScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allPokemons: props.pokemons,
      refreshing: false
    }
  }

  doSearchPokemon (text) {
    if (text === 'All') {
      this.setState({
        allPokemons: this.props.pokemons
      })
    } else {
      let filteredPokemons = this.props.pokemons.filter((pokemon) => {
        return pokemon.types.indexOf(text) > -1
      })
  
      this.setState({
        allPokemons: filteredPokemons
      })
    }
  }

  _onRefresh() {
    this.props.getPokemons()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={ styles.containerModal }>
          <ModalDropdown
            onSelect={(index, value) => this.doSearchPokemon(value) }
            options={['All', 'Normal', 'Poison', 'Fire', 'Flying', 'Water', 'Bug', 'Electric', 'Ground', 'Fairy', 'Grass']}
            defaultIndex={0}
            defaultValue='Filter by Type... '
            showsVerticalScrollIndicator={false}
            renderSeparator={() => (<View></View>)}
            textStyle={{ color: 'red'}}
            style={ styles.modalDropdown }
          >
          </ModalDropdown>
        </View>
        <ScrollView contentContainerStyle={ styles.scrollView }
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
        >
          {
            this.state.allPokemons.map((item, index) => (
              <TouchableOpacity key={index} 
                onPress={ () => this.props.navigation.navigate('Details', {
                  item: item,
                  otherParam: `${item.name} Details`
                })
              }>
                <View style={ styles.containerTouchableOpacity }>
                  <Image
                    resizeMode='stretch'
                    style={ styles.img }
                    source={{ uri:item.image }}
                  />
                  <Text style={{marginLeft: 'auto', marginRight: 'auto'}}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  containerModal: { 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', 
    width: 100, 
    marginRight: 'auto', 
    marginLeft: 'auto', 
    borderRadius: 6,
    borderWidth: 1,
    marginTop: 10,
  },
  modalDropdown: {
    height: 20, 
    marginTop: 6,
    
  },
  scrollView: {
    justifyContent: 'space-between', 
    flexDirection: 'row', 
    flexWrap: 'wrap'
  },
  img: {
    width: 95, 
    height: 80
  },
  containerTouchableOpacity: {
    marginBottom: 20, 
    marginTop: 10
  }
})

const mapStateToProps = (state) => {
  return {
    pokemons: state.Pokemons.pokemons
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemons: () => dispatch(GetPokemons())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPokemonScreen)
