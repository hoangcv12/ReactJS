export const addCart = (item,sl) =>{
    try {
        return {type: "Addcart", payload: item, quantity:sl };
    } catch (error) {
        console.log(error);
    }
}

export const deleteCart = (item) =>{
    try {
        return {type: "Deletecart", payload:item};
    } catch (error) {
        console.log(error);
    }
        
}
export const updateCart = (item,sl) =>{
    try {
        return {type: "Updatecart", payload: item, quantity:sl };
    } catch (error) {
        console.log(error);
    }
}
