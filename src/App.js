
import { useEffect, useState } from "react";
import Routes from './router';
import { getAll, add, remove, edit } from "./api/productApi";
import {useHistory} from 'react-router-dom';
import Alertinfo from "alertinfo";
import { deleteProduct } from "redux/actions/product";

function App() {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // call api
    
    const getProducts = async () => {
      
      try {
        const { data } = await getAll();
        setProducts(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getProducts();
  }, []);
  // add product
  const onAddHandler = async (item) =>{
    try {
      const {data} = await add(item); 
      
      setProducts([...products,data]);

    } catch (error) {
      console.log(error);
    }
  };
  //delet product
const onDeleteHandler = async (id) => {
  try {
    await remove(id);
    const newProduct = products.filter((item) => item.id !== id);
setProducts(newProduct);
  } catch (error) {
    console.log(error);
  }
};
//update products
const onEditHandler = async (item) =>{
  try {
    const {data} = await edit(item);
    const newProducts = products.map((product) => product.id === item.id ? data : product);
    setProducts(newProducts);
  } catch (error) {
    console.log(error)
  }
}
  return (
    <>
    <Alertinfo/>
    <Routes Delete={onDeleteHandler}/>
     
    </>
  );
}

export default App;
