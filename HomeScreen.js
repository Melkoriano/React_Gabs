import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('First')}>
         
        
          <ImageBackground source={require('./assets/fab.jpg')} style={styles.backgroundImage}>
          </ImageBackground>
          
          <Text style={styles.text}>Olá, Galera!</Text>
          
           

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  /*context_container:{
    color: 'white',
    fontSize: 20,
    padding: 10, // Espaçamento interno
    borderRadius: 10, // Bordas arredondadas
    elevation: 5, // Elevação para Android
    alignContent: 'center', //Posicionar no Centro Horizontal
    width: 200,
    height: 300, 

  },*/
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'orange', // Cor de fundo do botão
    padding: 10, // Espaçamento interno
    borderRadius: 20, // Bordas arredondadas
    elevation: 5, // Elevação para Android
    alignContent: 'center', //Posicionar no Centro Horizontal
    width:'auto', //Estica para todo espaço Horizontal
    height: 200, //Posicao(eixo Y) --  Altura
  },
  button: {
    backgroundColor: '#841584', // Cor de fundo do botão
    padding: 20, // Espaçamento interno
    borderRadius: 10, // Bordas arredondadas
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 4 }, // Posição da sombra
    shadowOpacity: 0.3, // Opacidade da sombra
    shadowRadius: 5, // Raio da sombra
    elevation: 4, // Elevação para Android
    marginBottom: 20, //Ajudar a altura do botao
  },
  buttonText: {
    color: 'white', // Cor do texto
    fontSize: 24, // Tamanho do texto
    fontWeight: 'bold', // Peso da fonte
  }
});

export default HomeScreen;
