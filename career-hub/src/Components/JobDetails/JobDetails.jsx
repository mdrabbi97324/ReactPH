import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';


 const JobDetails = () => {
 const jobs = useLoaderData();
 const {id} = useParams();
 const idInt = parseInt(id)
 const job = jobs.find(job => job.id === idInt);
 const {job_description, job_responsibility, educational_requirements, experiences,
    salary, job_title}= job || {};
 const {phone, email, address} = job.contact_information;

 const handleApplyJob = () => {
    const addAppliedJobsArray = [];
    const appliedJobs = JSON.parse(localStorage.getItem("appliedJob"))
    if(!appliedJobs) {
        addAppliedJobsArray.push(job);
        localStorage.setItem("appliedJob", JSON.stringify(addAppliedJobsArray))
        swal("Good job!", "You applied successfully!", "success");
    } 
    else {
        const isExists = appliedJobs.find((job) => job.id === idInt)
        if(!isExists) {
            addAppliedJobsArray.push(...appliedJobs, job);
            localStorage.setItem("appliedJob", JSON.stringify(addAppliedJobsArray))
            swal("Good job!", "You applied successfully!", "success");
        }

        else {
            
            swal("Error !", "You already applied this job!", "warning");
        }
        

    }
 }

return (
    <div className="p-6">
        <Helmet><title>Job Details</title></Helmet>
        <h2 className=" text-3xl font-extrabold text-center py-20">Job Details</h2>
            <div className="grid md:grid-cols-3 gap-10 md:gap-6 md:mb-52">
                <div className="md:col-span-2 space-y-6">
                    <p className="text-slate-500"><span className="text-black font-extrabold">Job Description : </span> {job_description}</p>
                    <p className="text-slate-500"><span className="text-black font-extrabold">Job Responsibility : </span>{job_responsibility}</p>
                    <p className="text-slate-500"><span className="text-black font-extrabold">Educational Requirements : </span><br />{educational_requirements}</p>
                    <p className="text-slate-500"><span className="text-black font-extrabold mt-10">Experiences : </span><br />{experiences}</p>
                </div>
                <div>
                    <div  className="p-8 bg-indigo-100 rounded-lg font-bold space-y-4 text-xl">
                        <h2 className="text-xl font-extrabold mb-6">Job Details</h2>
                        <p className="border-slate-400 border"></p>
                    <p>Salary : <span className="text-[#757575]">{salary}</span></p>
                        <p>Job Title : <span className="text-[#757575]">{job_title}</span></p>
                        <h3 className="text-xl font-extrabold mb-6">
                            Contact Information
                        </h3>
                            <p className="border-slate-400 border"></p>
                        <p>Phone : <span className="text-[#757575]">{phone}</span></p>
                        <p>Email : <span className="text-[#757575]">{email}</span></p>
                        <p>Address : <span className="text-[#757575]">{address}</span></p>
                    </div>
                <div><button onClick={handleApplyJob} className="btn btn-primary w-full mt-4 text-white font-extrabold text-xl">Apply Now</button></div>
                </div>
            </div>
    </div>
    );
};

export default JobDetails;