import {View, Text} from 'react-native';
import React from 'react';
import {CATEGORIES} from '../constants/categories';
import {styles} from './styles/productDetailStyles';
import {arsPaymentFormat} from '../functions/formatNumber';

const ProductDetail = ({route}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombre: {route.params.product.name}</Text>
      <Text style={styles.text}>
        Descripción: {route.params.product.description}
      </Text>
      <Text style={styles.text}>Peso: {route.params.product.weight}</Text>
      <Text style={styles.text}>Precio: $ {route.params.product.price}</Text>
    </View>
  );
};

export default ProductDetail;
