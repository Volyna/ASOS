import {
  ICategoryCreate,
  ICategoryUpdate,
} from "../components/admin/components/categories/types";
import http from "../services/http_common";

export async function getCategories() {
  const data = await http
    .get("/api/Category/getAllCategories")
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

export async function getCategoriesById(idCategory: number) {
  const data = await http
    .get("/api/Category/getById" + idCategory)
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

export async function createCategory(model: ICategoryCreate) {
  const data = await http
    .post("/api/Category/create", model)
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
export async function removeCategory(id: number) {
  const data = await http
    .delete("/api/Category/delete" + id)
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
export async function updateCategory(model: ICategoryUpdate) {
  const data = await http
    .put("/api/Category/update", model)
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
