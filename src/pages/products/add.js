import React from 'react';
import {useForm} from "react-hook-form";

export default function Add(props) {
const {register,handleSubmit,formState: {errors}} = useForm();
const onSubmit = (data) => {
    const fakeValue = {
        id: Math.random().toString(36).substring(7),...data
    };
    
props.onAdd(fakeValue);
}
    return (
        <div className="ms-sm-auto col-lg-10 px-md-5 mt-5 " >
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
          <label className="form-label">Tình trạng</label>
          <select
            className="form-control"
            // name="status"
            // onChange={onHandleChange}
            {...register("status")}
            defaultValue="0"
          >
            <option value="0">Hết hàng</option>
            <option value="1">Còn hàng</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary" >
          Thêm sản phẩm
        </button>
        <button type="reset" className="btn btn-info">reset</button>
      </form>
        </div>
    )
}

