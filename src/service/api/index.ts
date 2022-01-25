import axios, { Method, AxiosRequestHeaders }  from 'axios';

const axiosApi = (url:string, options:{}) => {
  const instance = axios.create({baseURL: url,...options});
  return instance;
}
const options = {
  headers: {},
  timeout: 1000,
}
export const defaultApi = axiosApi('/api/', options);
export const downloadApi = axiosApi('/file/download/', options);
