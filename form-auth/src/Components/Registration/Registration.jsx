import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../../firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Registration = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = e => {
        e.preventDefault()
        console.log('form submitted')
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(email, password, accepted);


        // reset error and success
        setRegisterError('');
        setSuccess('');

        // add some validation
        if(password < 6) {
            setRegisterError('Password should be at least 6 characters or longer')
            return;
        } else if(!/[A-Z]/.test(password)){
            setRegisterError('Your password should have at least one uppercase character');
            return;
        } else if(!accepted){
            setRegisterError('Please accept the terms and codition');
            return; 
        }



        // create user 
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user)
            setSuccess('Account create successfully')

            updateProfile(result.user, {
                displayName: name, photoURL: "https://example.com/ami/nije/email/change/korchi/profile.jpg"
            })
            .then(() => console.log('Profile Updated'))
            .catch()

            sendEmailVerification(result.user)
            .then(() => {
                alert('please check you email inbox')
            })
        })
        .catch(error => {
            setRegisterError(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-red-500">Register Now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-blue-100">
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">

        <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />

          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
          
        </div>

          <label className="label">
            <span className="label-text">Password</span>
          </label>
         <div className="relative">
         <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full" required />
         <span className="absolute top-3 right-3" onClick={() => setShowPassword(!showPassword)}>
            {
                showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
            }
         </span>
         </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary font-bold">Register</button>
        </div>

        <div>
            <input type="checkbox" name="terms" id="terms" className="mr-2" />
            <label htmlFor="terms">Accept our <a href="">terms and conditions</a></label>
            <span className="block mt-2 ml-4 text-green-500 font-bold"><Link to="/login">Already have an account?</Link></span>
        </div>
      {
        registerError && <p className="text-sm text-red-600" >{registerError}</p>
      }
      {
         success && <p className="text-green-600">{success}</p>
      }
    
      </form>
    </div>
  </div>
</div>
    );
};

export default Registration;