import jwt from "jsonwebtoken";
export const authenticated = (data) => {
    const dataDecode = jwt.decode(data);
    if(typeof window == 'undefined') return false;
    localStorage.setItem('user', JSON.stringify(dataDecode));

}  

export const isAuthenticate = () => {
    if (typeof window == 'undefined') return false;
    if(localStorage.getItem('user')){
        return JSON.parse(localStorage.getItem('user'))
    }else{
        return false;
    }
}

export const signOut = (next) => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
      next();
    }
  };
  