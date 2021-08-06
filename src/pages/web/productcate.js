
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';
import { addCart } from 'redux/actions/cart';
import { cateProducts } from 'redux/actions/product';

export default function ProductsWebcate() {

    const products = useSelector((state) => state.products.products);
    const total = useSelector((state) => state.products.total);
    const pagemax = parseInt(Number(total) / 4) +1;
    const dispatch = useDispatch();
    const history = useHistory();
    const [state, setState] = useState(1);
    const { id } = useParams();
    useEffect(() => {
        dispatch(cateProducts(state, id));
    }, [state, id]);
   
    const routerChange = (data) => {
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
   
    const img = (data) => {
        if (id === "1") {
            return <a href onClick={() => history.push(`/products/${data}/detail`)} ><img className="card-img-top" src="https://www.xtmobile.vn/vnt_upload/product/04_2021/thumbs/600_iphone_11_pro_max_den_xtmobile.jpg" alt="Card image cap" /></a>
        }
        else if (id === "2") {
            return <a href onClick={() => history.push(`/products/${data}/detail`)} ><img className="card-img-top" src="https://www.bhphotovideo.com/images/images2500x2500/apple_z0y0_mvvk_64_bh_mbp_tb_2_3ghz_8c_9th_gen_i9_64gb_8tb_1520710.jpg" alt="Card image cap" /></a>
        }
        else if (id === "3") {
            return <a href onClick={() => history.push(`/products/${data}/detail`)} ><img className="card-img-top" src="https://webonline.macstore.mx/img/sku/WATCH277_FZ.jpg" alt="Card image cap" /></a>
        } else {
            return <a href onClick={() => history.push(`/products/${data}/detail`)} ><img className="card-img-top" src="https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=6&m=922962354&s=612x612&w=0&h=_KKNzEwxMkutv-DtQ4f54yA5nc39Ojb_KPvoV__aHyU=" alt="Card image cap" /></a>

        }
    }

    const local = (data) =>{
        dispatch(addCart(data,1));
        history.push("/addcart");
      }

    return (
        <div className="container">
            <div className="row ">
                {products.map((product, index) => (
                    <div className="col-3 p-2 px-md-5">
                        <div key={index} className="card" style={{ width: '18rem' }}>

                            {img(`${product.id}`)}
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                ${product.price}
                                <i className="card-text ml-5 "  >{product.status === "true" ? (
                                    <span className="text-primary" >Còn hàng</span>
                                ) : (
                                    <span className="text-danger" >Hết hàng</span>
                                )}</i>
                                <div>
                                    {product.status === "true" ? (
                                        <button className="btn btn-outline-info mt-3" onClick={() => local(product)}>Mua ngay</button>
                                    ) : (
                                        <button disabled className="btn btn-outline-info mt-3" >Mua ngay</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item"><a class="page-link text-info" href onClick={() => routerChange(-1)}>Previous</a></li>
                    <li class="page-item"><a class="page-link text-info" href onClick={() => routerChange(1)}>Next</a></li>
                </ul>
            </nav>



        </div>
    )
}
