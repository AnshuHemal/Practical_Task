import { useProducts } from '@/context/ProductContext';
import { useLocalSearchParams } from 'expo-router';
import React from 'react'
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductDetailScreen = () => {
    const { id } = useLocalSearchParams();
    const {products} = useProducts();
    const product = products.find((p) => p.id == Number(id));

    if (!product) {
        return <Text>No Product Found</Text>
    }


  return (
    <SafeAreaView>
        <View style={{padding: 16}}>
            <Image source={{uri: product.image}} style={{height: 200}}/>
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text>${product.price}</Text>
        </View>
    </SafeAreaView>
  )
}

export default ProductDetailScreen