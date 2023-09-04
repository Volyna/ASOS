export interface IUser {
  name:string;
  surname:string;
  email: string;
  phone: string;
  image: string;
  roles: string;
  discountsAndSales:string;
  country:string,
  state:string,
  street:string,
  zipCode:string,
  city:string,
  isHavePassword:string;
  }
  export interface ServiceResponse{
    Message: string;
    Payload:object;
    IsSuccess: any;
  };