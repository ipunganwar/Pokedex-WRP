import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class DetailScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params.otherParam,
    }
  }

  checkTypes(types) {
   return (types.map((value, index) => (
    <View>
      <Text>{value}</Text>
    </View>
   )))
  }

  render() {
    const { navigation } = this.props
    const item = navigation.getParam('item')

    return (
      <View style={ styles.container }>
        <Image 
          resizeMode='stretch'
          style={ styles.img }
          source={{ uri:item.image }}
        />
          
        <Text>Number: {item.number}</Text>
        <Text>Name: {item.name}</Text>
        <Text>HP: {item.maxHP}</Text>
        <Text>CP: {item.maxCP}</Text>
        <Text>Classification: {item.classification}</Text>
        <Text>Types: </Text>
        {this.checkTypes(item.types)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  img: {
    width: 300, 
    height: 300, 
    marginBottom: 20
  }
})
  
