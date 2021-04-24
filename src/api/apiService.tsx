import axios, { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { Token } from '../models/Token';
import { User } from '../models/User';

export function login(
  username: string,
  password: string
): Promise<AxiosResponse<Token>> {
  return axios.post(`${process.env.REACT_APP_BASE_URL}/login`, {
    username,
    password,
  });
}

export const getUser = (): Promise<AxiosResponse<User>> => {
  return axios.get(`${process.env.REACT_APP_BASE_URL}/user`, {
    headers: {
      Authorization: Cookies.get('user_token'),
    },
  });
};
