import React from 'react';
import { View,Dimensions, Text, StyleSheet, ImageBackground, TouchableOpacity, useWindowDimensions } from 'react-native';
import Svg, {Circle,Polygon} from 'react-native-svg';

function SsecondScreen({navigation}) {
  const squareSize = 200;
  const circleRadius = 60;
  const centerX = squareSize;
  const centerY = squareSize;
  const points = [
    `${centerX}, ${centerY - squareSize / 2}`,
    `${centerX + squareSize / 2}, ${centerY}`,
    `${centerX}, ${centerY + squareSize / 2}`,
    `${centerX - squareSize / 2}, ${centerY}`
  ].join(' ');
  const { corx, cory } = Dimensions.get('window');

  
  
  
  return (
    
    <View style={styles.container}>
      <View style={styles.context_container}>
        <Text style={styles.text}>A NatureTech, empresa inovadora que produz eletrônicos de maneira automatizada,
                precisa que os programadores e os designers adaptem suas seções, recriando-as no
                modo virtual para levá-las a uma feira internacional. Como converter estas seções para o
                modo virtual?
           </Text>
      </View>    
      {/*Clicar no circulo leva até outra pagina*/}
      {/*<TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Planta1')}>    
        <Svg style={styles.svgContainer}>
          <Circle cx={centerX} cy={centerY - squareSize / 2} r={circleRadius} fill="red" />
        </Svg>
      </TouchableOpacity>
        
        <Svg style={styles.svgContainer}>
          <Circle cx={centerX + squareSize / 2} cy={centerY} r={circleRadius} fill="blue" />
          <Circle cx={centerX} cy={centerY + squareSize / 2} r={circleRadius} fill="green" />
          <Circle cx={centerX - squareSize / 2} cy={centerY} r={circleRadius} fill="yellow" />
  </Svg>*/}
    </View>
    
  );
}
// CSS - ARTE
const styles = StyleSheet.create({
  context_container:{
    fontSize: 20,
    padding: 10, // Espaçamento interno
    borderRadius: 100, // Bordas arredondadas
    elevation: 4, // Elevação para Android
    alignContent: 'center', //Posicionar no Centro Horizontal
    width:'auto',
    height: '100', 

  },
  container: { 
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 20,
    backgroundColor: '#841584', // Cor de fundo do botão
    padding: 30, // Espaçamento interno
    borderRadius: 10, // Bordas arredondadas
    elevation: 5, // Elevação para Android
  },
  plant:{
    alignContent: 'center', //Posicionar no Centro Horizontal
    elevation: 5, // Elevação para Android
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'none', // Cor de fundo do botão
    padding: 10, // Espaçamento interno
  },
  svgContainer: {
    elevation: 5, // Elevação para Android
    alignItems: 'center',
    width: 400,
    height: 400, // Definir altura e largura para o SVG container
  },
});

export default SsecondScreen;
