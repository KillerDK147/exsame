import httpService from "./httpService";
import jwtDecode from "jwt-decode";
const tokenKey = "x-auth-token";
const apiEndpoint = "login";
httpService.setJWT(getJWT());
export async function login(Email, Password) {
  const { data: jwt } = await httpService.post(apiEndpoint, {
    Email,
    Password,
  });
  localStorage.setItem(tokenKey, jwt);
  return jwt;
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getJWT() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(tokenKey);
}

export function getCurrentUser() {
  const jwt = getJWT();
  if (!jwt) return;
  return jwtDecode(jwt);
}
