import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
    
    if(loading){
        return (
            <div>
                <span className="loading loading-infinity loading-lg my-10 mx-[900px]"></span>
            </div>
        )  
    }
    if(user){
        return children;
    }
    return (
        <div>
             <Navigate state={location.pathname} to="/login"></Navigate>
        </div>   
    )
    
};

export default PrivetRoute;