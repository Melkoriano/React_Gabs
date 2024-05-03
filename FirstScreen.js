import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

function FirstScreen({navigation}) {
  return (
    
    <View style={styles.container}>
      
        
          <View style={styles.context_container}>
          <Text style={styles.text}>A empresa Fictícia NatureTech deseja inovar a forma como é apresentada
            aos seus clientes, para isso, são contratados programadores e designers para
            desenvolver um novo ambiente virtual com as propriedades espaciais e físicas da
            empresa, para que o Cliente se sinta andando pela fábrica mesmo estando a milhares
            quilômetros de distância
          </Text>
          </View>
          <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Second')}> 
          <View style={styles.button}> 
            <Text style={styles.buttonText}>Entrar na Fabrica</Text>
          </View>
          </TouchableOpacity>
      
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  context_container:{
    color: 'white',
    fontSize: 20,
    padding: 10, // Espaçamento interno
    borderRadius: 10, // Bordas arredondadas
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 4 }, // Posição da sombra
    shadowOpacity: 0.3, // Opacidade da sombra
    shadowRadius: 5, // Raio da sombra
    elevation: 5, // Elevação para Android
    alignContent: 'center', //Posicionar no Centro Horizontal
    width:'auto',
    height: 600, 

  },
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
    backgroundColor: '#841584', // Cor de fundo do botão
    padding: 10, // Espaçamento interno
    borderRadius: 10, // Bordas arredondadas
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 4 }, // Posição da sombra
    shadowOpacity: 0.3, // Opacidade da sombra
    shadowRadius: 5, // Raio da sombra
    elevation: 5, // Elevação para Android
  },
  button: {
    backgroundColor: '#841584', // Cor de fundo do botão
    padding: 20, // Espaçamento interno
    borderRadius: 10, // Bordas arredondadas
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 4 }, // Posição da sombra
    shadowOpacity: 0.3, // Opacidade da sombra
    shadowRadius: 5, // Raio da sombra
    elevation: 5, // Elevação para Android
    marginBottom: 20, //Ajudar a altura do botao
  },
  buttonText: {
    color: 'white', // Cor do texto
    fontSize: 10, // Tamanho do texto
    fontWeight: 'bold', // Peso da fonte
  }
});

export default FirstScreen;
