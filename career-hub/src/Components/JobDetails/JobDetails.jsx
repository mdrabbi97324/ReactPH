const JobDetails = () => {
    return (
        <div className="p-6">
            <h2 className=" text-3xl font-extrabold text-center py-20">Job Details</h2>
                <div className="grid md:grid-cols-3 gap-10 md:gap-6 md:mb-52">
                    <div className="md:col-span-2 space-y-6">
                        <p className="text-slate-500"><span className="text-black font-extrabold">Job Description : </span> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</p>
                        <p className="text-slate-500"><span className="text-black font-extrabold">Job Responsibility : </span>Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</p>
                        <p className="text-slate-500"><span className="text-black font-extrabold">Educational Requirements : </span><br />Bachelor degree to complete any reputational university.</p>
                        <p className="text-slate-500"><span className="text-black font-extrabold mt-10">Experiences : </span><br />2-3 Years in this field.</p>
                    </div>
                    <div>
                        <div  className="p-8 bg-indigo-100 rounded-lg font-bold space-y-4 text-xl">
                            <h2 className="text-xl font-extrabold mb-6">Job Details</h2>
                            <p className="border-slate-400 border"></p>
                            <p>Salary : <span></span></p>
                            <p>Job Title : </p>
                            <h3 className="text-xl font-extrabold mb-6">
                                Contact Information
                            </h3>
                                <p className="border-slate-400 border"></p>
                            <p>Phone :</p>
                            <p>Email :</p>
                            <p>Address : </p>
                        </div>
                    <div><button className="btn btn-primary w-full mt-4 text-white font-extrabold text-xl">Apply Now</button></div>
                    </div>
                </div>
        </div>
    );
};

export default JobDetails;