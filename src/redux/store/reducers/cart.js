import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

const Delete = (data) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <h1>Bạn chắc chưa?</h1>
            <p></p>
            <button className="btn btn-primary" onClick={onClose}>Cancel</button>
            <button className="btn btn-danger" style={{ marginLeft: '10px' }}
              onClick={() => { 
                  console.log("???", data);
                onClose();
                return data;
              }}
            >
              Confirm
            </button>
          </div>
        );
      }

    });
  };

const cartitem = JSON.parse(localStorage.getItem('cart'));
const initialState =  cartitem ? cartitem : [];

const cartReducer = (state = initialState, action) => {
    const {payload,quantity} = action;
   var index = -1;
    switch (action.type) {
          case "Addcart":
           index = productscart(state, payload);
            console.log("alo ", index);
            if(index !== -1){
                state[index].quantity += quantity;
            }else{
                state.push ( {...payload, quantity} );
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state] ;
          case "Deletecart":
             
            index = productscart(state, payload);
            console.log(payload);
            if (index !== -1) {
                state.splice(index, 1)
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state] ;
            case "Updatecart":  
            index = productscart(state, payload);  
            if ( index !== -1 && quantity>0) {
               state[index].quantity = quantity
            } 
            else if ( index !== -1 && quantity === 0 ) {
              
                if(window.confirm('Bạn muốn xóa sản phẩm?')){  state.splice(index, 1 )};
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state] ;
        default:
            return [...state]
    }
}

const productscart = (cart, product) =>{
    var index = -1;
    if(cart.length > 0 ){
        cart.forEach((value, key)=> {
            if(value.id === product.id){
                return index = key;
            }
        });
    }
    return index;
}
export default cartReducer;