import { useEffect, useState } from "react";

const CategoryList = () => {

    const [jobList, setJobList] = useState([]);
    useEffect(() => {
        fetch('/categories.json')
        .then(res => res.json() )
        .then(data => setJobList(data))
    },[])
    return (
        <div className="space-y-4 text-center">
            <h2 className="text-5xl font-extrabold">Job Category List</h2>
            <p className="font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid md:grid-cols-4 gap-6 text-left">
                {
                    jobList.map(job => <div key={job.id} className="border rounded-lg bg-blue-50 p-8">  
                    <img className="w-10" src={job.logo} alt="" />
                    <p className="text-xl mt-8 mb-2 font-extrabold">{job.availability}</p>
                    <p className="font-medium text-slate-400">{job.category_name}</p>
                    </div>  
                    )
                }
            </div>
        </div>
    );
};

export default CategoryList;