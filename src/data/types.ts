export interface IProduct {
  barcode: number;
  title: string;
  brand: string;
  description: string;
  price: number;
  image: string;
  manufacturer: string;
  size: number | string;
  sizeType: string;
  for?: string;
}

export interface IFilterProduct {
  for?: string;
}

export interface ISortProduct {
  sort?: string | undefined;
}

export interface IPriceSearchProduct {
  min?: number;
  max?: number;
  brand?: string[];
  manufacturer?: string[];
}

export interface IStatus {
  [key: number]: number;
  price: number;
}

export interface IQnt {
  key: number;
  qntAndPrice: number;
}
