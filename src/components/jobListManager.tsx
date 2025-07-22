'use client'

import FilterBar from "./filterBar"
import data from "@/../data/data.json"
import { Job } from "@/types/jobs"
import JobCard from "./jobCard"
import { TagFilterProps } from "@/types/tagsFilterProps"

export default function JobListManager({ selectedTags, setSelectedTags }: TagFilterProps) {

  const job: Job[] = data

  return (
    <div>
      {selectedTags.length > 0 && (
        <FilterBar selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      )}

      {job.map((job) => (
        <JobCard key={job.id} job={job} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      ))}
    </div>
  )
}
