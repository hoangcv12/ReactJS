import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Alert_on } from 'redux/actions/alert';
import { addProduct } from 'redux/actions/product';
import {  List_Category } from 'redux/actions/category';

export default function Add(props) {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const categorys = useSelector((state) => state.categorys.categorys);
  const gggg = useSelector((state) => state.products.products);
  
  useEffect(() => {
    dispatch(List_Category());
  }, []);
 
  const onSubmit = (data) => {
    const Value = {
      id: Math.random().toString(36).substring(7), ...data
    };
    dispatch(addProduct(Value))
    dispatch(Alert_on("Thêm thành công","Success","success"));
    reset();
  }
  return (
    <div className="col-5 offset-2 mt-5  p-3 px-md-4" >
      <h2 className="h2">Thêm sản phẩm</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm</label>
          <input
            type="text"
            className="form-control"

            // name="name"
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
          <label className="form-label">Thể loại</label>
          <select 
            className="form-control"
            {...register("idcate")}
          >
          {categorys.map((cate,key) =>(
            <option key={key} value={cate.id}>{cate.name}</option>
          ))}
           </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Tình trạng</label>
          <select
            className="form-control"
            {...register("status")}
            defaultValue="true"
          >
            <option value="false">Hết hàng</option>
            <option value="true">Còn hàng</option>
          </select>
        </div>
        <button type="submit" className="btn btn-info" >
          Thêm sản phẩm
        </button>

      </form>
    </div>
  )
}

