import { Product } from "./productTypes";

export enum ProductActionTypes {
  FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE',
}

export type ProductAction =
  | { type: ProductActionTypes.FETCH_PRODUCTS_REQUEST }
  | { type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS; payload: Product[]; }
  | { type: ProductActionTypes.FETCH_PRODUCTS_FAILURE; payload: string };
