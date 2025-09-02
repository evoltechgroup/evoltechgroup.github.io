"use client";
import { ArrowRight } from "lucide-react";
import { JobDescriptionModal } from "./JobDescription";
import { useState } from "react";
import { jobDescriptions } from "@/data/JobData";
import { JobDescriptionData } from "./JobDescription";

interface JobListing {
  id: string;
  title: string;
  experience: string;
  location: string;
}

const jobListings: JobListing[] = [
  {
    id: "devops",
    title: "DevOps",
    experience: "1-2 years experience",
    location: "Chennai",
  },
  {
    id: "ux-designer",
    title: "UX designer",
    experience: "3-5 years experience",
    location: "Chennai",
  },
  {
    id: "frontend",
    title: "Front-end developer",
    experience: "4-5 years experience",
    location: "Pune",
  },
  {
    id: "business-analyst",
    title: "Business Analyst",
    experience: "2-3 years experience",
    location: "Pune, Chennai",
  },
];

const JobListings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobDescriptionData | null>(null);

  const handleJobClick = (id: string) => {
    const found = jobDescriptions.find((job) => job.id === id);
    if (found) {
      setSelectedJob(found.data);
      setIsModalOpen(true);
    }
  };

  const handleApply = () => {
   
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 md:pb-10">
      {jobListings.map((job, index) => (
        <div
          key={index}
          onClick={() => handleJobClick(job.id)}
          className="group flex items-center justify-between p-6 bg-background transition-all duration-300 hover:bg-[#E8F4FF] hover:shadow-lg hover:-translate-y-1 cursor-pointer hover:border-l-4 hover:border-l-blue-300">
          <div className="flex-1">
            <h3 className="text-sm lg:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              {job.title}
            </h3>
            <p className="text-muted-foreground mt-1 text-sm lg:text-xl">
              {job.experience}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
              {job.location}
            </span>
            <ArrowRight className="w-10 h-10 text-[#AAB4BD] group-hover:text-[#0F8EE8] transition-colors duration-300" />
          </div>
        </div>
      ))}

      {selectedJob && (
        <JobDescriptionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onApply={handleApply}
          jobData={selectedJob}
        />
      )}
    </div>
  );
};

export default JobListings;
