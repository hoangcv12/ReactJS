import React from 'react'
import { useHistory } from 'react-router';
export default function Index(props) {

  const history = useHistory();
  const routerChange = (data) => {
    const path = `${data}`;
    history.push(path);
  }
  return (
    <div className="col-10 offset-2 mt-5  p-2 px-md-5  " >
      <div className="btn-group">
        <h2>Quản lý sản phẩm</h2>
        <button onClick={() => routerChange("/products/add")} type="button" className="btn btn-outline-primary " style={{ marginLeft: '792px' }} >Thêm sản phẩm</button>
      </div>

      <hr></hr>
      <table className=" table table-hover ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Giá sản phẩm</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Hoạt động</th>
          </tr>
        </thead>
        <tbody >
          {props.products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}đ</td>
              <td>
                {product.status ? (
                  <span className="text-primary">Còn hàng</span>
                ) : (
                  <span className="text-danger">Hết hàng</span>
                )}
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => props.onDelete(product.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-primary ms-1"
                  onClick={() => routerChange(`/products/${product.id}/edit`)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
