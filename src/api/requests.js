import axios from "./axios";

export function signUp(data) {
 return axios
    .post("/employee", data)
    .then((res) => res)
    .catch((err) => err);
}
