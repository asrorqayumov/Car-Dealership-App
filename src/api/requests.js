import axios from "./axios";
import Axios from "axios";

// file upload
export function FileUpload(file) {
  return axios.post(`/upload`, file);
}

// Log in
export function logInRequest(data) {
  return axios
    .post("/employee/login", data)
    .then((res) => res.data)
    .catch((err) => err);
}

// Category
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

export function CreateCategory(data) {
  return axios.post('/category',data)
    .then((res) => res)
    .catch((err) => err);
}

// Car
export function GetCar(id) {
  return axios
    .get(`/car/${id}`)
    .then((res) => res.data.data)
    .catch((err) => err);
}

export function CreateCar(data) {
  return axios
    .post(`/car`, data)
    .then((res) => res)
    .catch((err) => err);
}

export function UpdateCar(data) {
  return axios
    .put(`/car`, data)
    .then((res) => res)
    .catch((err) => err);
}

export function DeleteCar(id) {
  return axios.delete(`/car/${id}`);
}

export function GetCars(limit = 5, page = 1) {
  return axios
    .get(`/car?limit=${limit}&page=${page}`)
    .then((res) => res.data.data.data)
    .catch((err) => err);
}
