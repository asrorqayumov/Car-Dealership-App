import axios from "./axios";

export function logInRequest(data) {
  return axios
    .post("/employee/login", data)
    .then((res) => res.data)
    .catch((err) => err);
}
export function GetCategorys(limit = 5, page = 1) {
  return axios
    .get(`/category/marka?limit=${limit}&page=${page}`)
    .then((res) => res.data.data.data)
    .catch((err) => err);
}

export function GetCategoryCarsRequest(id, limit = 5, page = 1) {
  return axios
    .get(`/car?limit=${limit}&page=${page}&categoryId=${id}`)
    .then((res) => res.data.data.data)
    .catch((err) => err);
}
