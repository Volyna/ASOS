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
    size:  string,
    brand: string,
    quantity: number,
    isInTheStock: boolean,
    categoryId: number,
    images:any,
}

export interface IProductEdit {
    
    id:number,
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
    images: any;
    categoryId: number
}



export interface IProductItem {
    id: number,
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
    category_id: number,
    category: string,
    images: any,
}