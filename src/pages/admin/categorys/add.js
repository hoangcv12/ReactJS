import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Alert_on } from 'redux/actions/alert';
import { add_Category } from 'redux/actions/category';

export default function Add(props) {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = (data) => {
    const Value = {
      id: Math.random().toString(36).substring(7), ...data
    };
    dispatch(add_Category(Value))
    dispatch(Alert_on("Thêm thành công","Success","success"));
    reset();
  }
  return (
    <div className="col-3 offset-2 mt-5  p-3 px-md-4" >
      <h2 className="h2">Thêm thể loại</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên thể loại</label>
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
        
        <button type="submit" className="btn btn-info" >
          Thêm thể loại
        </button>

      </form>
    </div>
  )
}

