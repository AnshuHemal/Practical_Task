import { ProductProvider } from "@/context/ProductContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductListScreen from "@/screens/ProductListScreen";
import ProductDetailScreen from "@/screens/ProductDetailScreen";

export default function Index() {
  const Stack = createNativeStackNavigator();
  return (
    <ProductProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Products">
          <Stack.Screen name="Products" component={ProductListScreen} />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductProvider>
  );
}
