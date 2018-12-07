import React from 'react';
import { Image } from 'react-native';

export default class IconTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../assets/pokeball.png')}
        style={{ width: 40, height: 40 }}
      />
    )
  }
}