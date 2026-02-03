import { ProductAction, ProductActionTypes } from "./productActions";
import { Product } from "./productTypes";

export interface ProductState {
    products: Product[],
    loading: boolean,
    error: string | null
}

export const initialState: ProductState = {
    products: [],
    loading: false,
    error: null,
}

export const productReducer = (state: ProductState, action: ProductAction) : ProductState => {
    switch(action.type) {
        
        
        case ProductActionTypes.FETCH_PRODUCTS_REQUEST:
            return {...state, loading:true, error: null};

        case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {...state, loading: false, products: action.payload};

        case ProductActionTypes.FETCH_PRODUCTS_FAILURE:
            return {...state, loading:false, error: action.payload}

        default:
            return state;
    }
}