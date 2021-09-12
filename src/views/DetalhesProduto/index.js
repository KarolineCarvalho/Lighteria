import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Background from './components/Background';
import DescricaoItem from './components/DescricaoItem';

const DetalhesProduto = ({route}) => {
  const {titulo, itemDesc, imagem, estudio, preco, id, itemName} = route.params;
  return (
    <View style={styles.container}>
      <Background />
      <DescricaoItem
        titulo={titulo}
        itemDesc={itemDesc}
        imagem={imagem}
        estudio={estudio}
        preco={preco}
        id={id}
        itemName={itemName}
      />
    </View>
  );
};

export default DetalhesProduto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
