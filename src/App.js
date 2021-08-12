
import { useEffect, useState } from "react";
import Routes from './router';
import { getAll, add, remove, edit } from "./api/productApi";
import {useHistory} from 'react-router-dom';
import Alertinfo from "alertinfo";
import { deleteProduct } from "redux/actions/product";

function App() {
  
  return (
    <>
    <Alertinfo/>
    <Routes />
     
    </>
  );
}

export default App;
