import { ProductModel } from "@/interfaces/product.interface";
import { SortEnum } from "./Sort.props";

export type SortAction = {type: SortEnum.Rating} | {type: SortEnum.Price};

export interface SortReducerState {
  sort: SortEnum;
  products: ProductModel[];
}

export const sortReducer = (state: SortReducerState, action: SortAction): SortReducerState => {
  switch(action.type) {
    case SortEnum.Rating: {
      return {
        sort: SortEnum.Rating,
        products: state.products.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
      };
    }
    case SortEnum.Price: {
      return {
        sort: SortEnum.Price,
        products: state.products.sort((a, b) => a.price > b.price ? 1 : -1)
      };
    }
    default:{
      throw new Error("Такой сортировки нет");
    }
  }
};

export const initSortState = (initState: SortReducerState) => {
  switch(initState.sort) {
    case SortEnum.Rating: {
      return {
        sort: SortEnum.Rating,
        products: initState.products.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
      };
    }
    case SortEnum.Price: {
      return {
        sort: SortEnum.Price,
        products: initState.products.sort((a, b) => a.price > b.price ? 1 : -1)
      };
    }
    default:{
      return initState;
    }
  }
};