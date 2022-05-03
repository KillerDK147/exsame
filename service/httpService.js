import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_URL;
axios.interceptors.request.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log(error);
    alert("An unexpected error occurred.");
  }
  if (!expectedError) {
    alert("An unexpected error occurred.");
  }
  return Promise.reject(error);
});

function setJWT(jwt) {
  if (typeof window !== "undefined") {
    axios.defaults.headers.common["x-auth-token"] = jwt;
    console.log(jwt);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJWT,
};
