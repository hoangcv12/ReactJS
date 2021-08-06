import { getAll, add, edit, remove } from "api/categoryApi";

export const List_Category = () => async dispatch => {
    try {
        const {data} = await getAll();
        dispatch({type: "List_Category", payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const add_Category = (item) => async dispatch =>{
    try {
        const {data} = await add(item);
        dispatch({type: "Add_Category", payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const delete_Category = (id) => async (dispatch) =>{
    try {
       const {data} = await remove(id);
       dispatch({type: "Delete_Category", payload: data });
    } catch (error) {
        console.log(error);
    }
}


export const edit_Category = (item) => async dispatch =>{
    try {
        const {data} = await edit(item);
        dispatch({type: "Update_Category", payload: data });
     } catch (error) {
         console.log(error);
     }
}