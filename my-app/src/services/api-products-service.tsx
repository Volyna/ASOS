import {
  IProductCreate,
  IProductEdit,
} from "../components/admin/components/products/types";
import http from "./http_common";

export async function getProductsCategories(idCategory: number) {
  const data = await http
    .get("/api/Product/GetProductByCategoryId/" + idCategory)
    .then((response) => {
      return {
        response,
      };
    })
    .catch((error) => {
      return error.response;
    });
  return data;
}
export async function createProduct(model: IProductCreate) {
  const data = await http
    .post("/api/Product/CreateProduct", model)
    .then((response) => {
      return {
        response,
      };
    })
    .catch((error) => {
      return error.response;
    });
  return data;
}
export async function getByIdProduct(id: number) {
  const data = await http
    .get(`/api/Product/GetProductById?id=${id}`)
    .then((response) => {
      return {
        response,
      };
    })
    .catch((error) => {
      return error.response;
    });
  return data;
}

export async function updateProduct(model: IProductEdit) {
  const data = await http
    .put("/api/Product/UpdateProduct", model, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      return {
        response,
      };
    })
    .catch((error) => {
      return error.response;
    });
  return data;
}
export async function removeProduct(id: number) {
  const data = await http
    .delete("/api/Product/DeleteProduct", {
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        id: id,
      },
    })
    .then((response) => {
      return {
        response,
      };
    })
    .catch((error) => {
      return error.response;
    });
  return data;
}

export async function getProductsMan(iduser: number) {
  const data = await http
    .post("/api/Product/getProdcutsMan", iduser)
    .then((response) => {
      return {
        response,
      };
    })
    .catch((error) => {
      return error.response;
    });
  return data;
}
export async function getProductsWomen(iduser: number) {
  const data = await http
    .post("/api/Product/getProdcutsWomen", iduser)
    .then((response) => {
      return {
        response,
      };
    })
    .catch((error) => {
      return error.response;
    });
  return data;
}
