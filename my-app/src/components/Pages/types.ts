export interface Country {
    name: { common: string };
    capital: string;
    region: string;
    // Add more properties as needed
  }
export interface IRecoveryPasswordUpdate {
  password:string,
  confirmPassword:string,
  userId:string | null,
  token:string | null,
  }