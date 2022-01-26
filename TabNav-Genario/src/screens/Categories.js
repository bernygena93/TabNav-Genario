import {View, Text, Button, FlatList} from 'react-native';
import React from 'react';
import {CATEGORIES} from '../constants/categories';
import ItemsList from '../components/ItemsList';
import {styles} from './styles/categoriesStyles';

const Categories = ({navigation}) => {
  const handleSelectedCategory = item => {
    navigation.navigate('Products', {
      categoryId: item.id,
      name: item.title,
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={data => (
          <ItemsList item={data.item} onSelected={handleSelectedCategory} />
        )}
      />
    </View>
  );
};

export default Categories;
