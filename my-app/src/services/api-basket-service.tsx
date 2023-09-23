import { IBasketCreate, IBasketRemove } from "../components/Pages/Account/Favourites/types";
import { IOrderChecout } from "../components/Pages/Checkout/types";
import http from "./http_common";

export async function getBasketsById(idUser: number) {
  const data = await http
    .post("/api/Basket/getBaskets", idUser)
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
export async function createBasket(model: IBasketCreate) {
  const data = await http
    .post("/api/Basket/create", model)
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
export async function removeBasket(model: IBasketRemove) {
  const data = await http
    .post("/api/Basket/delete", model)
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
export async function createOrder(model: IOrderChecout) {
  const data = await http
    .post("/api/Order/addOrder", model)
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
