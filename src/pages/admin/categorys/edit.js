import React, {useState, useEffect} from 'react';
import { useForm} from "react-hook-form";
import { useParams, useHistory  } from 'react-router';
import {  useDispatch } from "react-redux";
import { editProduct } from 'redux/actions/product';
import { get } from 'api/categoryApi';
import { edit_Category } from 'redux/actions/category';


export default function Edit() {
const {id} = useParams();
const history = useHistory();
 const [category, setCategory] = useState({});
const dispatch = useDispatch();

useEffect(() => {
  const getCategory = async () => {
    try {
      const { data } = await get(id);
      setCategory(data);
      reset(data);
    } catch (error) {}
  };
  getCategory();
}, []);
const {register,handleSubmit,formState: {errors},reset} = useForm();
const onSubmit = (data) => {
    const Value = {
        id: id,...data
    };
    dispatch(edit_Category(Value));
    history.push("/admin/categorys");
}
    return (
        <div className="col-5 offset-2 mt-5  p-3 px-md-4">
            <h2 className="h2">Cập nhật thể loại</h2>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên thể loại</label>
          <input
            type="text"
            className="form-control"
            // name="name"
            defaultValue={category.name}
            {...register("name", { required: true })}
            // onChange={onHandleChange}
          />
          {errors.name && (
            <span className="d-block text-danger mt-3">
              This field is required
            </span>
          )}
        </div>
        
        
        <button type="submit" className="btn btn-info">
          Lưu thay đổi
        </button>
      </form>
        </div>
    )
}
