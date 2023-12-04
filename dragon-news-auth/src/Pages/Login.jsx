import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {

    const {userLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        console.log(email, password)

        userLogin(email, password)
        .then(result => {
            console.log(result)
            e.target.reset();
            navigate(location.state ? location.state : '/')
        })
        .catch(error => {
            console.error(error)
        })
    }

    return ( <div className="">
    <Navbar></Navbar>
        <div className="hero-content mt-16">
          <div className="card shrink-0 w-full max-w-3xl rounded-none bg-[#F3F3F3]">
            <form onSubmit={handleLogin} className="card-body w-full md:w-1/2 mx-auto pb-0">
                <h1 className="text-3xl font-semibold text-center">Login your account</h1>
              <div className="form-control mt-14">
                <hr />
                <label className="label">
                  <span className="text-lg font-semibold">Email address</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-semibold">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-[#403F3F] hover:bg-[#403F3F] border-none outline-none rounded-none text-white">Login</button>
              </div>
            </form>
            <p className="text-center py-4 font-semibold">Don&apos;t Have An Account ? <span className="text-orange-600"><Link to="/register">Register</Link></span></p>
          </div>
        </div>
    </div>
        
    );
};

export default Login;