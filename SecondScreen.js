import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';


function SecondScreen() {
  return (
    <View style={styles.container}>
      <Svg height="100" width="100">
        <Circle cx="50" cy="50" r="40" stroke="green" strokeWidth="2.5" fill="yellow" />
        <Rect x="15" y="15" width="70" height="70" stroke="red" strokeWidth="2" fill="blue" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default SecondScreen