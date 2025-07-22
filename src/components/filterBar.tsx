'use client'

import { TagFilterProps } from "@/types/tagsFilterProps"
import React from "react"

export default function FilterBar({ selectedTags, setSelectedTags }: TagFilterProps) {

  // for x button
  const handleRemoveTag = (tagToRemove: string) => {
    setSelectedTags((prev) => prev.filter((tag) => tag !== tagToRemove))
  }

  // for clear button
  const handleClearTags = () => {
    setSelectedTags([])
  }

  return (
    <div className="filter-bar-container">
      <div className="filter-bar">
        {selectedTags.map((tag) => (
          <div key={tag} className="filter-tags">
            <span className="filter-tags-name">{tag}</span>
            <button key="button" className="filter-tags-close" onClick={() => handleRemoveTag(tag)}>X</button>
          </div>
        ))}
      </div>

      <button key="button" className="clear-button" onClick={handleClearTags}>
        Clear
      </button>
    </div>
  )
}
