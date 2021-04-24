import axios, { AxiosResponse } from 'axios';

//   3  Replace fetch with axios library.
//   Add /api directory and create a wrapper for axios requests.
//   Set base API URL and Authorization header with token in the wrapper.
//   (You can store baseAPI URL in environment variable)

axios.defaults.headers['Authorization'] = `Bearer ???????token???????`;

export const login = (
  username: string,
  password: string
): Promise<AxiosResponse> => {
  return axios.post(`${process.env.REACT_APP_BASE_URL}/login`, {
    username,
    password,
  });
};
