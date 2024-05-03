import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

function FirstScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
        <ImageBackground source={require('./assets/fab1.jpg')} style={styles.backgroundImage}>
          <Text style={styles.text}>A empresa Fictícia NatureTech deseja inovar a forma como é apresentada
            aos seus clientes, para isso, são contratados programadores e designers para
            desenvolver um novo ambiente virtual com as propriedades espaciais e físicas da
            empresa, para que o Cliente se sinta andando pela fábrica mesmo estando a milhares
            quilômetros de distância</Text>
          <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Second')}}>
          <View style={styles.button}> 
            <Text style={styles.buttonText}>Entrar na Fabrica</Text>
          </View>
          </TouchableOpacity>
        </ImageBackground>
      
    </View>
    
    
    /*
    <View style={styles.container}>
      
        <ImageBackground source={require('./assets/fab.jpg')} style={styles.backgroundImage}>
          <Text style={styles.text}>A empresa Fictícia NatureTech deseja inovar a forma como é apresentada
            aos seus clientes, para isso, são contratados programadores e designers para
            desenvolver um novo ambiente virtual com as propriedades espaciais e físicas da
            empresa, para que o Cliente se sinta andando pela fábrica mesmo estando a milhares
            quilômetros de distância</Text>
        </ImageBackground>
          <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Second')}> 
          <View style={styles.button}> 
            <Text style={styles.buttonText}>Entrar na Fabrica</Text>
          </View>
          </TouchableOpacity>
      </View>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'space-between',  // Posiciona o conteúdo no topo
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
  button: {
    backgroundColor: 'orange', // Cor de fundo do botão
    padding: 0, // Espaçamento interno
    borderRadius: 10, // Bordas arredondadas
    marginBottom: 30, //Ajudar a altura do botao
    height: 50,
    width: 150,
    alignItems: 'center',  // Centraliza horizontalmente
  },
  buttonText: {
    textAlign: 'center',  // Centraliza o texto
    color: 'white', // Cor do texto
    fontSize: 20, // Tamanho do texto
    fontWeight: 'bold', // Peso da fonte
  }
  // Removi os estilos não utilizados para limpeza
});

export default FirstScreen;




/*import React from 'react';
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
*/