import { Product } from "@/context/productTypes";

const BASE_URL = 'https://fakestoreapi.com'

export const getProducts = async():Promise<Product[]> => {
    const response = await fetch(`${BASE_URL}/products`);

    if (!response.ok) {
        throw new Error('Failed to load products');
    }

    return response.json();
}