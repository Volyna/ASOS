
export interface IUser {
    name:string;
  surname:string;
  email: string;
    phone: string;
    image: string;
    roles: string;
}
export interface IBeforeLoginUser {
    RecaptchaToken:string,
    remember:boolean,
    email:string,
    password:string
}
export interface ILoginUser {
    email: string;
    password: string;
    IsRemember:boolean;
    RecaptchaToken:string;
}
export interface ILoginUserByGoogle {
    provider: string;
    token: string;
}
export interface IRegisterUser {
    email: string;
    password: string;
    firstName:string;
    lastName:string;
    dataBirdth:Date;
    mostlyInterested:string;
    discountsAndSales:boolean;
    newStuff:boolean;
    yourExclusives:boolean;
    asosPartners:boolean;
}