import {combineReducers, createStore, applyMiddleware} from 'redux';
import productReducer from './reducers/products';
import thunk from "redux-thunk";
import AlertReducer from './reducers/alert';
import categoryReducer from './reducers/categorys';
import cartReducer from './reducers/cart';

const allReducer = combineReducers({
    products : productReducer,
    Alert : AlertReducer,
    categorys: categoryReducer,
    cart: cartReducer
});

const store = createStore(
    allReducer,
    applyMiddleware(thunk)
    )

    export default store;