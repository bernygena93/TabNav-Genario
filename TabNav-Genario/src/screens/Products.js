import {View, Text, Button, FlatList} from 'react-native';
import React from 'react';
import {BREADS} from '../constants/products';
import BreadList from '../components/BreadList';
import {styles} from './styles/categoriesStyles';

const Products = ({navigation, route}) => {
  const handleSelected = item => {
    navigation.navigate('ProductDetail', {
      product: item,
    });
  };

  const breads = BREADS.filter(
    bread => bread.category === route.params.categoryId,
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={breads}
        keyExtractor={item => item.id}
        renderItem={data => (
          <BreadList product={data.item} onSelected={handleSelected} />
        )}
      />
    </View>
  );
};

export default Products;
