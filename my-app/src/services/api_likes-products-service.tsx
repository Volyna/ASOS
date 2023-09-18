import { IAddLikeProductOrRemove, IGetLikesProducts } from "../components/Pages/ManAndWomanPage/types";
import http from "./http_common";

export async function addLikeProduct(model: IAddLikeProductOrRemove) {
    const data = await http
        .post("/api/Like/addLike", model)
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
export async function removeLikeProduct(model: IAddLikeProductOrRemove) {
    const data = await http
        .post("/api/Like/removeLike", model)
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
export async function getLikesProducts(model: IGetLikesProducts) {
    const data = await http
        .post("/api/Like/getLikes", model)
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
