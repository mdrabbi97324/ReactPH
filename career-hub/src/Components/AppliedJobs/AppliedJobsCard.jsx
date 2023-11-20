import { Link } from "react-router-dom";

const AppliedJobsCard = ({job}) => {
    const {id, logo, job_title, company_name, salary, remote_or_onsite, job_type, location} = job || {};
    return (
        <div className="border flex flex-col rounded md:flex-row mb-6 items-center justify-between p-8">
            <div className="flex gap-8">
                <div className="w-52 h-52 rounded-lg bg-[#F4F4F4] flex justify-center items-center"><img className="w-20 h-10" src={logo} alt="" /></div>
                <div className="space-y-4">
                    <h3 className="text-2xl font-extrabold">{job_title}</h3>
                    <h4 className="text-xl font-semibold text-slate-500">{company_name}</h4>
                    <p><span className="px-5 font-extrabold py-2 border rounded mr-4 border-blue-500 text-blue-600">{remote_or_onsite}</span>
                    <span className="px-5 font-extrabold py-2 border rounded mr-4 border-blue-500 text-blue-600">{job_type}</span></p>
                    <p className="text-xl font-semibold text-slate-500"><span className="mr-6">Location : {location}</span><span>Salary : {salary}</span></p>
                </div>
            </div>
            <button className="btn btn-primary"><Link to={`/job/${id}`}>View Details</Link></button>
        </div>
    );
};

export default AppliedJobsCard;