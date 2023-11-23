import { useEffect, useState } from "react";
import AppliedJobsCard from "./AppliedJobsCard";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    console.log('use loader',jobs)
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    console.log('from state' , appliedJobs) 
    const handleJobsFilter = filter => {
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }

        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs);
        }

        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs)
        }

    }

    useEffect(() => {
        const appliedJobsFromLS = JSON.parse(localStorage.getItem("appliedJob"));
        if(jobs.length > 0) {
            const jobsApplied = [];
            for(const id of appliedJobsFromLS){
                const job = jobs.find(job => job.id === id.id);
                if(job){
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);

            console.log(jobs, appliedJobsFromLS, jobsApplied)
        }

    },[jobs])
    return (<>
            <Helmet>
                <title>Applied Jobs</title>
            </Helmet>
        <div className="min-h-screen max-w-7xl mx-auto px-6">
            <h2 className=" text-3xl font-extrabold text-center py-20">Applied Jobs</h2>
             <div className="text-right">
             <h2 className="text-2xl text-center">Jobs I applied: {displayJobs.length}</h2>
                <details className="dropdown">
                <summary className="m-1 btn">Filter</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>onsite</a></li>
                </ul>
            </details>
             </div>
            <div>
                {
                    displayJobs.map(job => <AppliedJobsCard key={job.id} job={job}></AppliedJobsCard>)
                }
            </div>
        </div>
    </>
    );
};

export default AppliedJobs;