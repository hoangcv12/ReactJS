import axiosClient from "./axiosClient"; 

export const getAll = () => {
    const url = `/categorys`;
    return axiosClient.get(url);
  };

  export const add = (product) =>{
    const url = `/categorys`;
    return axiosClient.post(url,product);
  }

  export const remove = (id) =>{
    const url = `/categorys/${id}`;
    return axiosClient.delete(url);
  }

  export const edit = (item) => {
    const url = `/categorys/${item.id}`;
    return axiosClient.put(url, item);
  }

  export const get = (id) => {
    const url = `/categorys/${id}`;
    return axiosClient.get(url);
  }
