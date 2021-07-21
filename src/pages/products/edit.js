import React, {useState, useEffect} from 'react';
import { useForm} from "react-hook-form";
import { useParams, useHistory  } from 'react-router';
import { get } from '../../api/productApi';

export default function Edit(props) {
   const [product, setProduct] = useState({});
const {id} = useParams();
const history = useHistory();

//callApi
useEffect(() => {
  const getproduct = async () =>{
      try {
          const {data} = await get(id);
          setProduct(data);
      } catch (error) {
          
      }
  };
  getproduct();
}, []);

const {register,handleSubmit,formState: {errors}} = useForm();
const onSubmit = (data) => {
    const fakeValue = {
        id: id,...data
    };
    props.onUp(fakeValue);
    history.push("/products");
}
    return (
        <div className="ms-sm-auto col-lg-10 px-md-5 mt-5 " >
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
        
        <button type="submit" className="btn btn-success">
          Lưu thay đổi
        </button>
      </form>
        </div>
    )
}
