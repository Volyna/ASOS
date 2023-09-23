export interface IChecout {
    country: string,
    state: string,
    street: string,
    zipCode: string,
    city: string,
    homePhone: string,
    userId: number,
    cardNumber: string,
    cardDate: string,
    cardCvv: string,
};
export interface IOrderChecout {
    userId: number,
    country: string,
    state: string,
    street: string,
    zipCode: string,
    city: string,
    homeNumber: string,
    cardNumber: string,
    ExpirationDate: string,
    Cvv: string,
    totalPrice: number,
    orders: Array<IResponseListProductToOrder>

}
export interface IResponseListProductToOrder {
    productId: number,
    countProducts: number,
    price: number,
    discount: number,
}