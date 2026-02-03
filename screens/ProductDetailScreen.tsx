import { useProducts } from '@/context/ProductContext';
import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react'
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductDetailScreen = ({route}: any) => {
 
    const {id} = route.params;
    const {products} = useProducts();
    const product = products.find((p) => p.id == id);

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