'use client'

import JobListManager from "@/components/jobListManager"
import { useState } from "react"

export default function Home() {

  const [selectedTags, setSelectedTags] = useState<string[]>([])

  return (
    <main>
      <div className="top-background"></div>

      <div className={`job-card-wrapper ${selectedTags.length > 0 ? "has-filter" : ""}`}>
        <JobListManager selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      </div>
    </main>
  )
}
