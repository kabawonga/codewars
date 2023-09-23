const match = (candidate, job) => {
  if (!candidate.minSalary || !job.maxSalary) throw "Error!";
  return job.maxSalary >= candidate.minSalary * 0.9;
};
