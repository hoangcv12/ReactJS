import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { useDispatch} from "react-redux";
import { get } from 'api/productApi';
import { listProducts } from 'redux/actions/product';
import { useHistory } from 'react-router';
import { addCart } from 'redux/actions/cart';

export default function Detailproducts() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await get(id);
        setProduct(data);
      } catch (error) { }
    };

    getProduct();
  }, []);

  const img = () => {
    if (product.idcate === "1") {
      return <img className="col-5" src="https://www.xtmobile.vn/vnt_upload/product/04_2021/thumbs/600_iphone_11_pro_max_den_xtmobile.jpg" alt="Card image cap" />
    }
    else if (product.idcate === "2") {
      return <img className="col-5" src="https://www.bhphotovideo.com/images/images2500x2500/apple_z0y0_mvvk_64_bh_mbp_tb_2_3ghz_8c_9th_gen_i9_64gb_8tb_1520710.jpg" alt="Card image cap" />
    }
    else if (product.idcate === "3") {
      return <img className="col-5" src="https://webonline.macstore.mx/img/sku/WATCH277_FZ.jpg" alt="Card image cap" />
    } else {
      return <img className="col-5" src="https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=6&m=922962354&s=612x612&w=0&h=_KKNzEwxMkutv-DtQ4f54yA5nc39Ojb_KPvoV__aHyU=" alt="Card image cap" />
    }
  }

  const local = (data) =>{
    dispatch(addCart(data,1));
    history.push("/addcart");
  }

  return (
  
  <div className="row offset-4" >
        {img()}
        <div className="card col-4 p-0 ">
          <div className="card-body">
            <p>{product.name}</p>
            <p>${product.price}</p>
            <p>{product.status === "true" ? (
              <span className="text-primary" >Còn hàng</span>
            ) : (
              <span className="text-danger" >Hết hàng</span>
            )}</p>
<div>
{product.status === "true" ? (
              <button  className="btn btn-outline-info mt-3"  onClick={() => local(product)}>Mua ngay</button>
            ) : (
              <button  className="btn btn-outline-info mt-3" disabled >Mua ngay</button>
            )}
                
                </div>
          </div>
        </div>      
         
      </div>
      
      )

}
