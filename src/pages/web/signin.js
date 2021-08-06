import React, {useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signin} from "api/authApi";
import { authenticated, isAuthenticate } from '../../auth';
import './css.css';

export default function Signin() {
const {sub } =isAuthenticate()
const { register, handleSubmit} = useForm();
const history = useHistory();
const [error, setError] = useState("");
const [success, setSuccess] = useState(false);
const onSubmit = async (data) => {
  try {
    
    const response = await signin (data);
    authenticated(response.data.accessToken);
    setSuccess(true);
    
  } catch (error) {
    setSuccess(false);
    setError(error.response.data)
  }
}
const redirectUser = () => {
  if(success) {

    if (sub === "1"){
      history.push('/admin')
    }else {
     
      history.push('/')
    }
  }
}
    return (
      <>
      {redirectUser()}
      {error && <div className="alert alert-danger mb-2">{error}</div>}
      
      
        <div className="container-fluid">
  <div className="row no-gutter">
    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
    <div className="col-md-8 col-lg-6">
      <div className="login d-flex align-items-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-lg-8 mx-auto">
              <h3 className="login-heading mb-4">Login</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-label-group">
                  <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus {...register('email')} />
                  <label htmlFor="inputEmail">Email address</label>
                </div>
                <div className="form-label-group">
                  <input type="password" id="inputPassword" className="form-control" placeholder="Password" required {...register('password')}/>
                  <label htmlFor="inputPassword">Password</label>
                </div>
                <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</button>
                <div >
                  <a className="thea" href="" >Forgot password?</a></div>
                  <p className="login-card-footer-text">Don't have an account? <Link className="thea" to="/signup" >Register here</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
    )
}
