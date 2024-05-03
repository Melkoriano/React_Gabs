import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Draggable from 'react-native-draggable';



const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


export const ElementoPlantaBaixa = ({ nome, imagem, tamanho, posicao, estilo, onRemove, setShowTrashcan }) => {
  const onDragRelease = (event, gestureState) => {
    const trashcanX = screenWidth - 90; 
    const trashcanY = screenHeight - 550; 
  
    const trashcanWidth = 100;  // Largura da área de soltura da lixeira
    const trashcanHeight = 57
    ; // Altura da área de soltura da lixeira
  
    console.log(Soltou em X: ${gestureState.moveX}, Y: ${gestureState.moveY});
    console.log(Área da lixeira: X=${trashcanX} a ${trashcanX + trashcanWidth}, Y=${trashcanY} a ${trashcanY + trashcanHeight});
  
    if (
      gestureState.moveX >= trashcanX && 
      gestureState.moveX <= trashcanX + trashcanWidth &&
      gestureState.moveY >= trashcanY && 
      gestureState.moveY <= trashcanY + trashcanHeight
    ) {
      console.log("removendo elemento");
      onRemove();
    }
    setShowTrashcan(false); // Esconde o ícone da lixeira após soltar
  };


  return (
      <View style={estilo}>
          <Draggable
              x={posicao.x}
              y={posicao.y}
              renderSize={tamanho || 40}
              renderShape="image"
              imageSource={imagem}
              onDrag={() => setShowTrashcan(true)}
              onDragRelease={onDragRelease}
          />
      </View>
  );
};

export const elementos = [
  {
    nome: 'quadrado',
    imagem: require('../images/quadrado1.png'),
    tamanho: 350,
    cor: 'transparent',
    posicao: { x: -20, y: 92 },
  },
  {
    nome: 'Cama',
    imagem: require('../images/moveis/cama.png'),
    tamanho: 150,
    cor: 'transparent',
    posicao: { x: 20, y: 190 },
  },
  {
    nome: 'Mesa',
    imagem: require('../images/moveis/mesaComputador.png'),
    tamanho: 100,
    cor: 'transparent',
    posicao: { x: 20, y: 190 },
  },
  {
    nome: 'Guarda roupas',
    imagem: require('../images/moveis/guardaroupas.png'),
    tamanho: 120,
    cor: 'transparent',
    posicao: { x: 20, y: 190 },
  },
  {
    nome: 'Sofá',
    imagem: require('../images/moveis/sofa.png'),
    tamanho: 100,
    cor: 'transparent',
    posicao: { x: 20, y: 190 },
  },
  {
    nome: 'Sofá Maior',
    imagem: require('../images/moveis/sofaMaior.png'),
    tamanho: 100,
    cor: 'transparent',
    posicao: { x: 20, y: 190 },
  },
];


const ElementosContainer = () => {
    return (
      <View style={styles.draggableContainer}>
        {elementos.map((elem, index) => (
          <ElementoPlantaBaixa
            key={${elem.nome}-${index}}
            {...elem}
            estilo={styles.elemento}
          />
        ))}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
      draggableContainer: {
        flexDirection: 'row', 
        padding: 10, 
        flexWrap: 'wrap', // Permite que os elementos sejam dispostos em mais de uma linha se necessário
      },
      elemento: {
        zIndex: 1, 
        width: 48,
        marginHorizontal: 5,
    },
    
  });



export default ElementosContainer;