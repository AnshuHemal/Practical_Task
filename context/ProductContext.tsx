import React, { Children, createContext, Dispatch, useContext, useReducer } from 'react'
import { initialState, productReducer, ProductState } from './productReducer';
import { getProducts } from '@/api/products.api';
import { ProductActionTypes } from './productActions';
import { FC } from 'react'

interface ProductContextValue extends ProductState{
    fetchProducts: () => Promise<void>
}

const ProductContext = createContext<ProductContextValue | undefined>(undefined)

export const ProductProvider : FC<{children:React.ReactNode}> = ({
    children
}) => {
    const [state, dispatch] = useReducer(productReducer, initialState);

    const fetchProducts = async() => {
        dispatch({
            type: ProductActionTypes.FETCH_PRODUCTS_REQUEST
        })

        try {
            const products = await getProducts();
            dispatch({
                type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
                payload: products
            })
        } catch (error) {
            dispatch({
                type: ProductActionTypes.FETCH_PRODUCTS_FAILURE,
                payload: (error as Error).message
            })
        }
    }

    return (
        <ProductContext.Provider value={{...state, fetchProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProducts = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProducts must be used within ProductProvider')
    }
    return context;
}