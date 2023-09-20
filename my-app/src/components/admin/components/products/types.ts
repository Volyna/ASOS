export interface IProductCreate {
    name: string,
    productType: string,
    material: string,
    pattern: string,
    fit: string,
    shop: string,
    price: number,
    discount: number,
    description: string,
    color: string,
    size: string,
    brand: string,
    quantity: number,
    isInTheStock: boolean,
    categoryId: number,
    images:any,
}

export interface IProductEdit {
    
    id:number|string|undefined,
    name: string,
    price: number,
    discount: number,
    description: string,
    color: string,
    size: string,
    brand: string,
    quantity: number,
    isInTheStock: boolean,
    // images: Array<String>;
    // newImages: Array<File>;
    category_id: number
}

export interface IProductEditPost {
    name: string,
    price: number,
    discount: number,
    description: string,
    color: string,
    size: string,
    brand: string,
    quantity: number,
    isInTheStock: boolean,
    category_id: number
    // removeImages: Array<String>;
    // images: Array<File>;
}

export interface IProductItem {
    id: number|string|undefined,
    name: string,
    price: number,
    discount: number,
    description: string,
    color: string,
    size: string,
    brand: string,
    quantity: number,
    isInTheStock: boolean,
    category_id: number,
    category: string,
    // images: string[],
}