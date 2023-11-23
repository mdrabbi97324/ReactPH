import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import { Helmet } from 'react-helmet-async';


const Home = () => {

    return ( 
        <>
          <Helmet>
             <title>Career Hub | Home</title>
          </Helmet>
            <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src="/images/user.png" className=" w-72 md:w-[700px] rounded-lg" />
              <div className="md:max-w-xl">
                <h1 className="text-7xl leading-tight font-extrabold">One Step Closer To Your <span className="text-[#7E90FE]">Dream Job</span></h1>
                <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn btn-primary text-xl font-semibold text-white px-7">Get Started</button>
              </div>
            </div>
        </div>
        <div className="mt-20 mb-8  px-4">
          <CategoryList></CategoryList>
        </div>
        <div className="mt-20 mb-8  px-4">
          <FeaturedJobs></FeaturedJobs>
        </div>
        <div className="text-center mt-10 mb-10">
          <button className="btn btn-primary text-xl font-semibold text-white">See All Jobs</button>
        </div>
        </>


    );
};

export default Home;