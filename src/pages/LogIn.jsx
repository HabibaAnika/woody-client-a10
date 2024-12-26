
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";




const LogIn = () => {
    const { signIn, singInWithGoogle, singInWithGithub } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                
            })

    }

    const handleGoogleSignIn = () => {
        singInWithGoogle()
            .then(result => {
                console.log(result);
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleGithubSignIn = () => {
        singInWithGithub()
            .then(result => {
                console.log(result);
                navigate(location?.state ? location.state : '/')
            })
            
            .catch(error => {
                console.error(error)
            })
    }
    

    return (
        <div>
            <div className="mb-20 mt-40 card shrink-0 shadow-2xl bg-base-100 w-[70%] lg:w-[30%] mx-auto py-10">
                <h1 className="text-5xl font-bold text-center animate__bounceIn">Login now!</h1>
                <form onSubmit={handleLogin} className="w-[80%] mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#e09045] text-white">LOGIN</button>
                    </div>
                    <div className="flex items-center justify-center my-5 gap-4">
                        <button onClick={handleGoogleSignIn} className="btn btn-ghost rounded-full bg-[#e09045] text-white"><FaGoogle /></button>
                        <button onClick={handleGithubSignIn} className="btn btn-ghost rounded-full bg-[#e09045] text-white"><FaGithub /></button>
                    </div>
                </form>
                <p className="text-center">Do not have an account? Please <Link className="text-[#e09045] font-semibold" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default LogIn;