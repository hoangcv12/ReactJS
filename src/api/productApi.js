import axiosClient from "./axiosClient";

export const getAll = () => {
  const url = `/products`;
  return axiosClient.get(url);
};

export const add = (product) =>{
  const url = `/products`;
  return axiosClient.post(url,product);
}

export const remove = (id) =>{
  const url = `/products/${id}`;
  return axiosClient.delete(url);
}

export const edit = (item) => {
  const url = `/products/${item.id}`;
  return axiosClient.put(url, item);
}

export const get = (id) => {
  const url = `/products/${id}`;
  return axiosClient.get(url);
}

export const getPaginate = (page) => {
  const url = `/products?_page=${page}&_limit=8`;
  return axiosClient.get(url);
}

export const getcate = (page,idcate) => {
  const url = `/products?idcate=${idcate}&_page=${page}&_limit=8`;
  return axiosClient.get(url);
}