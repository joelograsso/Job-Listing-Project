import React from "react";
import JobsListings from "../components/JobsListings";
import jobs from "../jobs.json";

const JobsPage = ({ isHome = false }) => {
  return (
    <section className="bg-blue-50 px-4 py-6">
      <JobsListings />
    </section>
  );
};

export default JobsPage;
