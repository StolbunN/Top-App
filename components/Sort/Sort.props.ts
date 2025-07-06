import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  sort: SortEnum;
  setSortAction: (sort: SortEnum) => void;
}

export enum SortEnum {
  Rating,
  Price
}