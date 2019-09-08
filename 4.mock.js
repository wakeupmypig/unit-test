import axios from 'axios';
export const forEach = (arr, fn) => {
  arr.forEach(fn);
};

export const fetchUser = () => {
  return axios.get("/user");
};
export const fetchList = () => {
  return axios.get("/list");
};

export const mockTimer = callback => {
  setTimeout(() => {
    callback();
  }, 2000);
};
