
import { useEffect, useState } from "react";
import Routes from './router';
import { getAll} from "./api/productApi";
import './App.css';

function App() {
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
  return (
    <Routes products={products}/>
  );
}

export default App;
