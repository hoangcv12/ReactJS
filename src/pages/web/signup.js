import React, { useState } from 'react'
import { set, useForm } from 'react-hook-form';
import { signup } from '../../api/authApi'
import { authenticated } from '../../auth';
import { useSelector, useDispatch } from "react-redux";
import { Alert_on } from 'redux/actions/alert';
import { Satellite } from '@material-ui/icons';

export default function Signup() {
  const [state, setState] = useState();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {

      await signup(data);
      dispatch(Alert_on("Đăng ký thành công, bạn có thể đăng nhập ngay bây giờ", "Thành công", "success"));
    } catch (error) {
      dispatch(Alert_on(error.response.data, "Lỗi", "danger"));
    }


  }
  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  {/* {error && <AlertContainer><Alert  type="danger" headline="Error" onDismiss={ demiss} timeout={1000}>{error}</Alert></AlertContainer>} */}
                  {/* {success && <AlertContainer><Alert type="success" onDismiss={() => demiss()} timeout={1000}>Bạn đã đăng ký thành công. Click <Link to="/signin">vào đây</Link> để đăng nhập </Alert></AlertContainer>}  */}
                  <h3 className="login-heading mb-4">Registration</h3>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-label-group">
                      <input type="text" id="inputname" className="form-control" placeholder="User name" required autofocus {...register('username')} />
                      <label htmlFor="inputname">User name</label>
                    </div>
                    <div className="form-label-group">
                      <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus {...register('email')} />
                      <label htmlFor="inputEmail">Email address</label>
                    </div>
                    
                    
                    
                    <div className="form-label-group">
                      <input type="password" id="inputPassword" className="form-control" placeholder="Password" required {...register('password')} />
                      <label htmlFor="inputPassword">Password</label>
                    </div>
                    
                  
                    <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign up</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
