import { useState } from "react"
import { FaAngleDown,FaCheck } from "react-icons/fa";
import "./QuerySelector.css"

export default function QuerySelector({ queries, onSelect,setShowLargeData }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedQuery, setSelectedQuery] = useState(queries[0])

  const handleSelect = (query) => {
    setSelectedQuery(query)
    setIsOpen(false)
    onSelect(query)
    setShowLargeData(false)
  }

  return (
    <div className="query-selector">
      <div className="selector-trigger" onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedQuery.name}</span>
        <FaAngleDown />
      </div>

      {isOpen && (
        <div className="selector-dropdown">
          {queries.map((query) => (
            <div
              key={query.id}
              className={`selector-option ${query.id === selectedQuery.id ? "selected" : ""}`}
              onClick={() => handleSelect(query)}
            >
              {query.name}
              {query.id === selectedQuery.id && (
                <FaCheck />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

