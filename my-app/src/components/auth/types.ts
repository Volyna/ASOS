
export interface IBeforeLoginUser {
    RecaptchaToken:string,
    remember:boolean,
    email:string,
    password:string
}
export interface IChangeContactInfo {
    email:string,
    phone:string,
    firstName:string,
    lastName:string,
    discountsAndSales:string,
    passwordOld:string ,
    passwordNew:string ,
    country:string,
    state:string,
    street:string,
    zipCode:string,
    city:string,
    homePhone:string,
    isHavePassword:string | null,
    newPasswordAnotherLogin:string,
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
    dataBirdth:Date | null;
    mostlyInterested:string;
    discountsAndSales:boolean;
    newStuff:boolean;
    yourExclusives:boolean;
    asosPartners:boolean;
    RecaptchaToken:string;
}

export interface IGetAllUsers{
    id: number
    email: string;
    phone : string;
    firstName : string;
    lastName: string;
    country: string;
    state : string;
    street: string;
    zipCode : string;
    city : string;
    homePhone: string;
}