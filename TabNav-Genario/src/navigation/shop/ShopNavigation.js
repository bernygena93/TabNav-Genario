import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from '../../screens/Categories';
import Products from '../../screens/Products';
import ProductDetail from '../../screens/ProductDetail';

const Stack = createNativeStackNavigator();

const ShopNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{
          title: 'Categorias',
        }}
        component={Categories}
      />
      <Stack.Screen
        name="Products"
        options={({route}) => ({
          title: route.params.name,
        })}
        component={Products}
      />
      <Stack.Screen
        name="ProductDetail"
        options={{
          title: 'Informacion del Pan',
        }}
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigation;
