import { getAll, add, remove, edit, getPaginate, getcate } from "../../api/productApi";

export const listProducts = () => async dispatch => {
    try {
        const {data} = await getAll();
        dispatch({type: "List_Product", payload: data});
    } catch (error) {
        console.log(error);
    }
}
export const pageProducts = (page) => async dispatch => {
    try {
        const res = await getPaginate(page);
        dispatch({type: "Page_Product", payload: res.data, total:res.headers["x-total-count"]});
    } catch (error) {
        console.log(error);
    }
}

export const cateProducts = (page,idcate) => async dispatch => {
    try {
        const res = await getcate(page,idcate);
        dispatch({type: "Cate_Product", payload: res.data, total:res.headers["x-total-count"]});
        
    } catch (error) {
        console.log(error);
    }
}
export const addProduct = (item) => async dispatch =>{
    try {
        const {data} = await add(item);
        dispatch({type: "Add_Product", payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = (id) => async (dispatch) =>{
    try {
       const {data} = await remove(id);
       dispatch({type: "Delete_Product", payload: data });
    } catch (error) {
        console.log(error);
    }
}


export const editProduct = (item) => async dispatch =>{
    try {
        const {data} = await edit(item);
        dispatch({type: "Update_Product", payload: data });
     } catch (error) {
         console.log(error);
     }
}

