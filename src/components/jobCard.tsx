'use client'

import { Job } from "@/types/jobs"
import { TagFilterProps } from "@/types/tagsFilterProps"

type Props = {
  job: Job
} & TagFilterProps

export default function JobCard({ job, selectedTags, setSelectedTags }: Props) {

  const tags = [job.role, job.level, ...job.languages, ...job.tools]

  const handleTagClick = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag])
    }
  }
  return (
    <div className={`job-container ${job.featured ? "job-feature-border" : ""}`}>
      <div className="jobs-card">
        <div className="job-left">
          {/* company logo */}
          <img src={job.logo} alt={job.company} className="job-logo" />

          <div className="jobs-info">
            {/* company name / new and featured tag */}
            <div className="jobs-card-heading">
              <h1 className="company-name">{job.company}</h1>
              {job.new && <span className="tag-new">NEW!</span>}
              {job.featured && <span className="tag-featured">FEATURED</span>}
            </div>

            {/* job position */}
            <h2 className="position">{job.position}</h2>

            {/* post/contact/location */}
            <p className="job-details job-detail-underline">{job.postedAt} • {job.contract} • {job.location}</p>
          </div>
        </div>

        {/* role level languages and tools */}
        <div className="tag-tool-container">
          {tags.map((tag) => (
            <span key={tag} className="tag-tool" onClick={() => handleTagClick(tag)}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
