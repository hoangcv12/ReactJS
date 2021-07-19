import axiosClient from "./axiosClient";

export const getAll = () => {
  const url = `/products`;
  return axiosClient.get(url);
};