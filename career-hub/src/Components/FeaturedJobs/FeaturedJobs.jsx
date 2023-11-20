import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedJobs = () => {

    const [featuredJobs, setFeaturedJobs] = useState([]);
useEffect(() => {
    fetch('/jobs.json')
    .then(res => res.json())
    .then(data => setFeaturedJobs(data))
} , [])
return (
    <div className="space-y-4 text-center">
    <h2 className="text-5xl font-extrabold">Featured Jobs</h2>
    <p className="font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
    <div className="grid md:grid-cols-2 gap-6">
        {
            featuredJobs.map(featuredJob => <div key={featuredJob.id} className="border rounded-lg border-[#E8E8E8] text-left p-5 md:p-10  flex flex-col">
                <div className="grow space-y-4">
                    <img className="w-20 h-10" src={featuredJob.logo} alt="" />
                        <h3 className="text-2xl font-extrabold">{featuredJob.job_title}</h3>
                        <h4 className="text-xl font-semibold text-slate-500">{featuredJob.company_name}</h4>
                        <p><span className="px-5 font-extrabold py-2 border rounded mr-4 border-blue-500 text-blue-600">{featuredJob.remote_or_onsite}</span>
                        <span className="px-5 font-extrabold py-2 border rounded mr-4 border-blue-500 text-blue-600">{featuredJob.job_type}</span></p>
                        <p className="text-xl font-semibold text-slate-500"><span className="mr-6">Location : {featuredJob.location}</span><span>Salary : {featuredJob.salary}</span></p>
                </div>
                    <button className="btn mt-6 btn-primary text-xl w-[160px] text-white font-semibold"><Link to={`/job/${featuredJob.id}`}>View Details</Link></button>
            </div>)
        }
    </div>
</div>
    );
};

export default FeaturedJobs;