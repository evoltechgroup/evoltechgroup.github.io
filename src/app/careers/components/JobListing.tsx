"use client";
import { ArrowRight, Search } from "lucide-react";
import { JobDescriptionModal } from "./JobDescription";
import { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import { jobDescriptions } from "@/data/JobData";
import { JobDescriptionData } from "./JobDescription";
import PrevNextPagination from "@/components/Pagination/PrevNextPagination";

interface JobListing {
  id: string;
  title: string;
  experience: string;
  location: string;
}

const jobListings: JobListing[] = [
  {
    id: "associate-gcp-devops-engineer",
    title: "Associate GCP DevOps Engineer",
    experience: "2-4 years experience",
    location: "Chennai, Others",
  },
  {
    id: "aws-devops-engineer-associate",
    title: "AWS DevOps Engineer - (Associate)",
    experience: "2-4 years experience",
    location: "Chennai, Others",
  },
  {
    id: "azure-devops-engineer",
    title: "Azure DevOps Engineer",
    experience: "2-8 years experience",
    location: "Chennai, Others",
  },
  {
    id: "aws-devops-manager",
    title: "AWS DevOps Manager",
    experience: "9 to 15 years experience",
    location: "Chennai, Others",
  },
  {
    id: "aws-devops-engineer",
    title: "AWS DevOps Engineer",
    experience: "2 to 8 years experience",
    location: "Chennai, Others",
  },
  {
    id: "windows-system-administrator",
    title: "Windows System Administrator",
    experience: "6 to 10 years experience",
    location: "Chennai, Others",
  },
  {
    id: "senior-aws-devops-engineer",
    title: "Senior AWS DevOps Engineer",
    experience: "9 to 15 years experience",
    location: "Chennai, Others",
  },
  {
    id: "linux-system-administrator",
    title: "Linux System Administrator (L2)",
    experience: "4 to 6 years experience",
    location: "Chennai, Others",
  },
  {
    id: "solution-architect-aws-nutanix",
    title: "Solution Architect (AWS & Nutanix)",
    experience: "8 to 15 years experience",
    location: "Chennai, Others",
  },
  {
    id: "observability-engineer",
    title: "Observability Engineer (L2)",
    experience: "7 to 15 years experience",
    location: "Chennai, Others",
  },
  {
    id: "senior-azure-devops-engineer",
    title: "Senior Azure DevOps Engineer",
    experience: "9 to 15 years experience",
    location: "Chennai, Others",
  },
  {
    id: "senior-gcp-devops-engineer",
    title: "Senior GCP DevOps Engineer",
    experience: "9 to 15 years experience",
    location: "Chennai, Others",
  },
  {
    id: "gcp-devops-engineer",
    title: "GCP DevOps Engineer",
    experience: "4 to 8 years experience",
    location: "Chennai, Others",
  },
];

const JOBS_PER_PAGE = 7;

const JobListings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobDescriptionData | null>(
    null,
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = jobListings.filter((job) =>
    [job.title, job.experience, job.location]
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * JOBS_PER_PAGE,
    currentPage * JOBS_PER_PAGE,
  );
  const placeholderCount = Math.max(0, JOBS_PER_PAGE - paginatedJobs.length);

  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

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

  const handlePageChange = (page: number) => {
    if (totalPages < 1) {
      setCurrentPage(1);
      return;
    }
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 md:pb-10 flex flex-col">
      {/* Search input */}
      <div className="relative mb-6">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
          style={{ color: "#4C96D7" }}
        />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search job openings..."
          className="w-full pl-9 pr-4 py-2.5 rounded-lg border text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-200 bg-white focus:ring-2"
          style={{
            borderColor: "#8DCAFF",
            ["--tw-ring-color" as string]: "#4C96D7",
          }}
        />
      </div>

      {/* Job rows */}
      <div className="flex-1">
        {paginatedJobs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Search className="w-10 h-10 mb-3" style={{ color: "#8DCAFF" }} />
            <p className="text-base font-medium text-muted-foreground">
              No openings found for &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Try a different keyword
            </p>
          </div>
        ) : (
          <>
            {paginatedJobs.map((job) => (
              <div
                key={job.id}
                role="button"
                tabIndex={0}
                onClick={() => handleJobClick(job.id)}
                onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleJobClick(job.id);
                  }
                }}
                className="group flex items-center justify-between p-6 bg-background transition-all duration-300 hover:bg-[#E8F4FF] hover:shadow-lg hover:-translate-y-1 cursor-pointer hover:border-l-4 hover:border-l-[#4C96D7] focus:outline-none focus:ring-2 focus:ring-[#4C96D7]"
                aria-label={`View job: ${job.title}`}
              >
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
                  <ArrowRight className="w-10 h-10 text-[#AAB4BD] group-hover:text-[#4C96D7] transition-colors duration-300" />
                </div>
              </div>
            ))}

            {/* Invisible placeholders to maintain consistent height */}
            {Array.from({ length: placeholderCount }).map((_, i) => (
              <div
                key={`ph-${i}`}
                aria-hidden="true"
                className="flex items-center justify-between p-6 invisible pointer-events-none"
              >
                <div className="flex-1">
                  <div className="h-7 mb-2" />
                  <div className="h-5" />
                </div>
                <div className="w-10 h-10" />
              </div>
            ))}
          </>
        )}
      </div>

      <PrevNextPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

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
