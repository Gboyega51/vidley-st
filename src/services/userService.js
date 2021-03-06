import http from "./httpServices";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/users";

export function regiter(user) {
  return http.post(apiEndPoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
