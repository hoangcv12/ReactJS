import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/EditOutlined';
import {  deleteProduct, pageProducts } from 'redux/actions/product';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function Index() {
  const [change, setChange] = useState(false);
  const history = useHistory();
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const [state, setState] = useState(1);
  const total = useSelector((state) => state.products.total);
  const pagemax = parseInt(Number(total) / 8) +1;

  useEffect(() => {
    dispatch(pageProducts(state));
  }, [change, state]);

  const routerChangepage = (data) => {
    if (data === -1) {
        if (state <= 1) {
            setState(1);
        } else {
            setState(state + data);
        }
    } else {
        if (state >= pagemax) {
            setState(pagemax);
        }
        else {
            setState(state + data);
        }
        
    }
  
}

 
  const routerChange = (data) => {
    const path = `${data}`;
    history.push(path);
  }

  const Delete = (id) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <h1>Bạn chắc chưa?</h1>
            <p></p>
            <button className="btn btn-primary" onClick={onClose}>Cancel</button>
            <button className="btn btn-danger" style={{ marginLeft: '10px' }}
              onClick={() => {
                dispatch(deleteProduct(id));
                onClose();
                setChange(!change);
              }}
            >
              Confirm
            </button>
          </div>
        );
      }

    });
  };

  return (
    <div className="col-10 offset-2 mt-5  p-2 px-md-5  " >
      <div className="btn-group mb-3">
        <h2>Quản lý sản phẩm</h2>
        <button onClick={() => routerChange("/admin/products/add")} type="button" className="btn btn-outline-info " style={{ marginLeft: '792px' }} >Thêm sản phẩm</button>
      </div>


      <table className=" table table-hover ">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Giá sản phẩm</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Hoạt động</th>
          </tr>
        </thead>
        <tbody >
          {products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>
                {product.status === "true" ? (
                  <span >Còn hàng</span>
                ) : (
                  <span >Hết hàng</span>
                )}
              </td>
              <td>
                <EditIcon
                  className="  text-warning"
                  onClick={() => routerChange(`/admin/products/${product.id}/edit`)}
                >
                </EditIcon>
                <DeleteIcon
                  className="ms-3 text-danger" onClick={() => Delete(product.id)}
                ></DeleteIcon>



              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item"><a class="page-link text-info" href onClick={() => routerChangepage(-1)}>Previous</a></li>
         
          <li class="page-item"><a class="page-link text-info" href onClick={() => routerChangepage(1)}>Next</a></li>
        </ul>
      </nav>
    </div>
  )
}

