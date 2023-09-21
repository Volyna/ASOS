export interface IBasketCreate {
    countProducts: number,
    userIdOrder: number,
    productId: number
}
export interface IBasketRemove {
    countProducts: number,
    userIdOrder: number,
    productId: number
}