import { IAddLikeProductOrRemove } from "../components/Pages/Man and Woman Page/types";
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
