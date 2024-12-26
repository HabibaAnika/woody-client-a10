
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";
import {db} from "../firebase/firebase.config"
import { setDoc, doc } from 'firebase/firestore';
import Swal from 'sweetalert2';


const Register = () => {
    const { createUser, user } = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);
        
        setRegisterError('');
        setSuccess('');
        
        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password should be at least one uppercase characters');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('Password should be at least one lowercase characters');
            return;
        }

        createUser(email, password)
        .then(result => {
            setSuccess('User Created Successfully.');
            console.log(result.user);
            if(user){
                setDoc(doc(db,"Users", user.uid),{
                    email: user.email,
                    name: name,
                    photo: photo,
                })
            } 
        })
        .catch(error => {
            console.error(error);
        })
        
    }
    useEffect(() => {
        if (success) {
            Swal.fire({
                title: 'Success!',
                text: 'User Added Successfully',
                icon: 'success',
                confirmButtonText: 'Done'
            });
        }
    }, [success]);
    

    return (
        <div>
            <div className="mb-20 mt-40 card shrink-0 shadow-2xl bg-base-100 w-[70%] lg:w-[30%] mx-auto py-10">
                <h1 className="animate__bounceIn text-5xl font-bold text-center">Register now!</h1>
                <form onSubmit={handleRegister} className="w-[80%] mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
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
                        <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" className="input input-bordered" required />
                        <span className="absolute top-[395px] right-[15%]" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />
                            }
                        </span>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#e09045] text-white">REGISTER</button>
                    </div>
                </form>
                {
                    registerError && <p className="text-red-700 text-center">{registerError}</p>
                }
                
                <p className="text-center mt-4">Already register? Please <Link className="text-[#e09045] font-semibold" to="/login">Login</Link></p>
                
            </div>
        </div>
    );
};

export default Register;