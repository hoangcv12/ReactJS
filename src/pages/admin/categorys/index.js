import React, { useEffect, useState } from 'react'
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/EditOutlined';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router';
import { delete_Category, List_Category } from 'redux/actions/category';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function Index() {
    const history = useHistory();
    const categorys = useSelector((state) => state.categorys.categorys);
    const dispatch = useDispatch();
    const [change, setChange] = useState(false);

    useEffect(() => {
        dispatch(List_Category());
      }, [change]);

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
                    dispatch(delete_Category(id))
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
        <div className="col-6 offset-2 mt-5  p-2 px-md-5  " >
      <div className="btn-group mb-3">
        <h2>Quản lý thể loại</h2>
         <button onClick={() => routerChange("/admin/categorys/add")} type="button" className="btn btn-outline-info " style={{ marginLeft: '315px' }} >Thêm thể loại</button> 
      </div>


      <table className=" table table-hover ">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên thể loại</th>
            <th scope="col">Hoạt động</th>
          </tr>
        </thead>
        <tbody >
          {categorys.map((category, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{category.name}</td>
              
              <td>
                <EditIcon
                  className="  text-warning"
                  onClick={() => routerChange(`/admin/categorys/${category.id}/edit`)}
                >
                </EditIcon>
                <DeleteIcon
                  className="ms-3 text-danger" onClick={() => Delete(category.id)}
                ></DeleteIcon>



              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul class="pagination ">
          <li class="page-item"><a class="page-link text-info" href >Previous</a></li>
          <li class="page-item"><a class="page-link text-info" href >Next</a></li>
        </ul>
      </nav>
    </div>
    )
}
