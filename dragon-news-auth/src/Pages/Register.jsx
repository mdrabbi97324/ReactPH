import { Link, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Register = () => {
    const {userRegister} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        // const name = e.target.name.value;
        // console.log("name : ",name);
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const photo = form.get('photoUrl')
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        userRegister(email, password)
        .then(res => {
            console.log(res)
            navigate('/')
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div className="">
        <Navbar></Navbar>
            <div className="hero-content mt-4">
              <div className="card shrink-0 w-full max-w-3xl rounded-none bg-[#F3F3F3]">
                    <h1 className="text-3xl font-semibold pt-8 text-center w-full">Register Your Account</h1>
                <form onSubmit={handleRegister} className="card-body w-11/12 md:w-1/2 mx-auto pb-0">
                  <div className="form-control">
                    <label className="label">
                      <span className="text-lg font-semibold">Your Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="text-lg font-semibold">Photo URL</span>
                    </label>
                    <input type="text" name="photoUrl" placeholder="Photo URL" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
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
                <p className="text-center font-semibold text-[#403F3F]">Accept Terms and Conditions</p>
                  <div className="form-control mt-2">
                    <button className="btn btn-primary bg-[#403F3F] hover:bg-[#403F3F] border-none outline-none rounded-none text-white">Register</button>
                  </div>
                <p className="text-center py-4">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
                </form>
              </div>
            </div>
        </div>
    );
};

export default Register;