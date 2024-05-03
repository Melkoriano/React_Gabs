import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('First')}>
        <ImageBackground source={require('./assets/fab.jpg')} style={styles.backgroundImage}>
          <Text style={styles.text}>Olá, Galera!</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-start',  // Posiciona o conteúdo no topo
    alignItems: 'center',  // Centraliza horizontalmente
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'orange',  // Cor de fundo do texto
    padding: 10,  // Espaçamento interno
    borderRadius: 20,  // Bordas arredondadas
    elevation: 5,  // Elevação para Android
    width: 'auto',  // Usa a largura necessária
    textAlign: 'center',  // Centraliza o texto
    marginTop: 20,  // Margem no topo para dar espaço
  },
  // Removi os estilos não utilizados para limpeza
});

export default HomeScreen;
