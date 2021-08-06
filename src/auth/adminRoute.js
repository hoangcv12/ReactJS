import { Redirect, Route } from "react-router-dom";
import { isAuthenticate } from '../auth';
import {  useDispatch } from "react-redux";
import { Alert_on } from "redux/actions/alert";
const AdminRoute = ({ children }) => {
    const dispatch = useDispatch();
    return (
      <Route
        render={() => {
          return (isAuthenticate() && isAuthenticate().sub === "1") ? (
            children
          ) : (
            dispatch(Alert_on("Hãy đăng nhập với tư cách Admin","Cảnh báo","warning")),
            <Redirect to={{ pathname: "/signin" }} />

            
          );
        }}
      />
    );
  };
  
  export default AdminRoute;