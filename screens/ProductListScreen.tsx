import { useProducts } from '@/context/ProductContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from 'expo-router';
import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, Text, TouchableOpacity } from 'react-native';


type Props = NativeStackScreenProps<any, 'ProductList'>

const ProductListScreen = ({navigation}: any) => {
  const {products, loading, error, fetchProducts } = useProducts();


  useEffect(() => {
    fetchProducts();
  }, [])

  if (loading) {
    return <ActivityIndicator size={'large'}/>
  }

  if (error) {
    return <Text>{error}</Text>
  }


  return (
    <FlatList data={products} keyExtractor={(item) => item.id.toString()} renderItem={({item}) => (
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', {productId: item.id})}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    )}/>
  )
}

export default ProductListScreen