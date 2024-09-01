import React from "react";
import "./NonContact.scss";

function NonContact() {
  const jobs = [
    { id: 1, title: "Web Development Task", description: "Create a responsive website.", type: "Service Provider" },
    { id: 2, title: "Graphic Design Task", description: "Design a logo for a startup.", type: "Service Provider" },
    { id: 3, title: "Content Writing Task", description: "Write a blog post about technology.", type: "Service Provider" },
    { id: 4, title: "Cleaning Service Task", description: "Deep clean a 3-bedroom house.", type: "Service Receiver" },
    { id: 5, title: "Dog Walking Task", description: "Walk a dog in the neighborhood.", type: "Service Receiver" },
  ];

  const handleJobAction = (jobId) => {
    console.log(`User decided to take or leave job with ID: ${jobId}`);
    // Implement logic for taking or leaving the job
  };

  return (
    <div className="non-contact">
      <h1>Non-Contact Job Listings</h1>
      <div className="job-section">
        <div className="service-provider">
          <h2>Service Provider</h2>
          {jobs.filter(job => job.type === "Service Provider").map((job) => (
            <div className="job-card" key={job.id}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <button onClick={() => handleJobAction(job.id)}>Take Job</button>
              <button onClick={() => handleJobAction(job.id)}>Leave Job</button>
            </div>
          ))}
        </div>
        <div className="service-receiver">
          <h2>Service Receiver</h2>
          {jobs.filter(job => job.type === "Service Receiver").map((job) => (
            <div className="job-card" key={job.id}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <button onClick={() => handleJobAction(job.id)}>Take Job</button>
              <button onClick={() => handleJobAction(job.id)}>Leave Job</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NonContact;
