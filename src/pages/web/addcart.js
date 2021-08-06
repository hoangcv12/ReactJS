
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import { deleteCart, updateCart } from 'redux/actions/cart';

export default function Addcart() {
  
  const state = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const sum = (price, quantity) => {
    return price * quantity;
  }

  const total = () =>{
    var total = 0;
    if(state.length > 0 ){
      state.forEach((value)=> {
              return total += value.price * value.quantity;
      });
  }
  return total;
}
  const img = (idcate) => {
    if (idcate === "1") {
      return <img width="120px" src="https://www.xtmobile.vn/vnt_upload/product/04_2021/thumbs/600_iphone_11_pro_max_den_xtmobile.jpg" alt="" />
    }
    else if (idcate === "2") {
      return <img width="120px" src="https://www.bhphotovideo.com/images/images2500x2500/apple_z0y0_mvvk_64_bh_mbp_tb_2_3ghz_8c_9th_gen_i9_64gb_8tb_1520710.jpg" alt="" />
    }
    else if (idcate === "3") {
      return <img width="120px" src="https://webonline.macstore.mx/img/sku/WATCH277_FZ.jpg" alt="" />
    } else {
      return <img width="120px" src="https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=6&m=922962354&s=612x612&w=0&h=_KKNzEwxMkutv-DtQ4f54yA5nc39Ojb_KPvoV__aHyU=" alt="" />
    }
  }
  
  return (
    <div className="container mb-5">
      <div className="rows mt-5 col-10 offset-1 ">
        <div className="table-responsive">
        <table className="table table-borderless" style={{ fontSize: '18px' }}>
          <thead>
            <tr>
              <th></th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Tổng </th>

            </tr>
          </thead>
          <tbody >
          
            {state.map((item, key) => (
            
              <tr key={key}>
                <td> {img(item.idcate)}</td>
                <td >{item.name}</td>
                <td >${item.price}</td>
                <td >  
              <RemoveIcon className="mr-2" onClick={() => dispatch(updateCart(item,item.quantity - 1 ))}/> 
               {item.quantity}
                <AddIcon className="ml-2" onClick={() => dispatch(updateCart(item,item.quantity + 1 ))}/>
                  </td>
                <td align="justify">${sum(item.price,item.quantity)}</td>
               <DeleteIcon style={{fontSize:'50px',color:'red'}} onClick={() => dispatch(deleteCart(item))}/>
              </tr>
              
            ))
            }
          </tbody>
        </table>
        </div>
        <hr/>
        <p style={{fontSize:'26px'}}>Tổng tiền: ${total()} </p>
      </div>


    </div>
  )
}
