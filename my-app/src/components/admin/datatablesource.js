import { colors } from "@mui/material";
import { number, string } from "yup";


export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "firstName",
    headerName: "First Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div >
          {params.row.firstName}
        </div>
      );
    },
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 230,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "state",
    headerName: "State",
    width: 100,
  },
  {
    field: "street",
    headerName: "Street",
    width: 100,
  },
  {
    field: "zipCode",
    headerName: "ZipCode",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "homePhone",
    headerName: "Home phone",
    width: 100,
  },
 
];

export const productColumns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "name",
    headerName: "Name",
    width: 180,
    
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
    
  },
  {
    field: "description",
    headerName: "Description",
    width: 200,
  },
  {
    field: "color",
    headerName: "Color",
    width: 100,
  },
  {
    field: "productType",
    headerName: "Product type",
    width: 100,
  },
  {
    field: "material",
    headerName: "Material",
    width: 100,
  },
  {
    field: "pattern",
    headerName: "Pattern",
    width: 100,
  },
  {
    field: "fit",
    headerName: "Fit",
    width: 100,
  },
  {
    field: "shop",
    headerName: "Shop",
    width: 100,
  },
  {
    field: "size",
    headerName: "Size",
    width: 100,
  },
  {
    field: "brand",
    headerName: "Brand",
    width: 100,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 100,
  },
  {
    field: "isInTheStock",
    headerName: "InTheStock",
    width: 100,
  },
  {
    field: "image",
    headerName: "Images",
    width: 130,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={`data:image/png;base64,${params.row.image}`} alt="product" />
        </div>
      );
    },
  },
  {
    field: "category",
    headerName: "CategoryId",
    width: 100,
  },
];

export const categoryColumns = [
  
  { field: "id", headerName: "ID", width: 100},
  {
    field: "name",
    headerName: "NAME",
    width: 430,
  },
 
];

export const orderColumns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "userName",
    headerName: "Name",
    width: 200,
    
  },
  {
    field: "userSurname",
    headerName: "Surname",
    width: 200,
    
  },
  {
    field: "userId",
    headerName: "User Id",
    width: 150,
    
  },

  {
    field: "creditCardId",
    headerName: "CreaditCardId",
    width: 150,
    
  },
  {
    field: "addressId",
    headerName: "AddressId",
    width: 150,
    
  },

  {
    field: "productId",
    headerName: "ProductId",
    width: 150,
    
  },

  {
    field: "productCount",
    headerName: "Count",
    width: 150,
    
  },
];

export const productRows = [
  {
    id: 1,
    productName: "knitted cropped cardigan with double zip in stripe",
    price: 500,
    description: "Softwear update, High collar, Two-way zip fastening, Long sleeves, Regular fit",
    color: "white",
    size: 36,
    brand: "ASOS",
    quatity: 100,
    isInTheStock: true,
    image: "https://images.asos-media.com/products/asos-design-knitted-cropped-cardigan-with-double-zip-in-stripe/204889007-4?$n_640w$&wid=513&fit=constrain",
    categoryId: 1
  },
];

export const categoryRows = [
  {
    id: 1,
    name: "Shoes",
  },
];

export const orderRows = [
  {
    id: 1,
    userName: "Alla",
    userSurname: "Bakned",
    userId:1,
    creditCardId: 1,
    addressId: 1,
    productId: 1,
    productCount: 2
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    firstName: "Snow",
    lastName: "Viter",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    firstName: "Jamie",
    lastName: " Lannister",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    firstName: "Lannister",
    lastName: "Yuki",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    firstName: "Stark",
    lastName: "Bordom",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    firstName: "Targaryen",
    lastName: "Line",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  
];
