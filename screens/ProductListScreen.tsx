import { useProducts } from '@/context/ProductContext';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, Text, TouchableOpacity } from 'react-native';

const ProductListScreen = () => {
  const router = useRouter();
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
      <TouchableOpacity onPress={() => router.push({ pathname: 'ProductDetail', params: { id: item.id } })}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    )}/>
  )
}

export default ProductListScreen