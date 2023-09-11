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
