import React from 'react'
import { Link } from "react-router-dom";
export default function Index(props) {
    return (
        <div className="ms-sm-auto col-lg-10 px-md-5 mt-5 " >
     <h2>Quản lý sản phẩm</h2>
     <hr></hr>
   <table className=" table table-hover ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Tên sản phẩm</th>
      <th scope="col">Giá</th>
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
                    onClick={() => props.onRemove(product.id)}
                  >
                    Delete
                  </button>
                  <Link
                    className="btn btn-primary ms-1"
                    to={`/product/${product.id}/edit`}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
  </tbody>
</table>
</div>
    )
}
