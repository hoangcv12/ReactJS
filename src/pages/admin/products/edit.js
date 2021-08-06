import React, {useState, useEffect} from 'react';
import { useForm} from "react-hook-form";
import { useParams, useHistory  } from 'react-router';
import {  useDispatch } from "react-redux";
import { editProduct } from 'redux/actions/product';
import { get } from 'api/productApi';

export default function Edit() {
const {id} = useParams();
const history = useHistory();
 const [product, setProduct] = useState({});
const dispatch = useDispatch();

useEffect(() => {
  const getProduct = async () => {
    try {
      const { data } = await get(id);
      setProduct(data);
      reset(data);
    } catch (error) {}
  };
  getProduct();
}, []);
const {register,handleSubmit,formState: {errors},reset} = useForm();
const onSubmit = (data) => {
    const Value = {
        id: id,...data
    };
    dispatch(editProduct(Value));
    history.push("/admin/products");
}
    return (
        <div className="col-5 offset-2 mt-5  p-3 px-md-4">
            <h2 className="h2">Cập nhật sản phẩm</h2>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm</label>
          <input
            type="text"
            className="form-control"
            // name="name"
            defaultValue={product.name}
            {...register("name", { required: true })}
            // onChange={onHandleChange}
          />
          {errors.name && (
            <span className="d-block text-danger mt-3">
              This field is required
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Giá sản phẩm</label>
          <input
            defaultValue={product.price}
            type="number"
            className="form-control"
            // name="price"
            // onChange={onHandleChange}
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="d-block text-danger mt-3">
              This field is required
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Tình trạng</label>
          <select
            className="form-control"
            // name="status"
            // onChange={onHandleChange}
            {...register("status")}
            defaultValue={product.status}
          >
            <option value="false">Hết hàng</option>
            <option value="true">Còn hàng</option>
          </select>
        </div>
        
        <button type="submit" className="btn btn-info">
          Lưu thay đổi
        </button>
      </form>
        </div>
    )
}
