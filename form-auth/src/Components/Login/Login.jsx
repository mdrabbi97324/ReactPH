import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {

    const [loginError, setLoginError] = useState('');
    const [successLogin, setSuccessLogin] = useState('');
    const emailRef = useRef(null);


    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        setLoginError('')
        setSuccessLogin('')

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('user',user);
            setSuccessLogin('Login successfull')
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            setLoginError(errorMessage);
          });
    }

    const handleForgotPassword = () => {
      const email = emailRef.current.value;
      if(!email){
        console.log('Please provide an email', emailRef.current.value)
        return;
      }

      else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
        console.log('Provide a valid email', emailRef.current.value);
        return;
      }

      sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Sent a reset mail')
      })
      .catch(error => console.log(error.message))

      console.log('clicked')
    }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-red-500">Login here!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" ref={emailRef} placeholder="email" className="input input-bordered" required />
        </div>

          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a onClick={handleForgotPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>

          <span className="text-sm hover:underline"><Link to="/registration">Create new account</Link></span>
          </label>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        {
            loginError && <p className="text-red-500">{loginError}</p>

        }
        {
            successLogin && <p className="text-green-600">{successLogin}</p>
        }

      </form>
    </div>
  </div>
</div>
    );
};

export default Login;