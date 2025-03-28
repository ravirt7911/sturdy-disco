import { useState } from "react"
import "./ResultsTable.css"
import { FaSearch,FaArrowLeft,FaArrowRight } from "react-icons/fa";
import { FixedSizeList as List } from "react-window";

export default function ResultsTable({ data, isLoading, rowCount }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const rowsPerPage = 10

  if (isLoading) {
    return (
      <div className="results-loading">
        <div className="results-loading-header"></div>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="results-loading-row"></div>
        ))}
      </div>
    )
  }

  if (!data || data.length === 0) {
    return (
      <div className="results-empty">
        <p>No results to display. Run a query to see data.</p>
      </div>
    )
  }

  const columns = Object.keys(data[0])

  // Filter data based on search term
  const filteredData = data.filter((row) =>
    Object.values(row).some(
      (value) => value !== null && value.toString().toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  )

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / rowsPerPage)
  const startIndex = (currentPage - 1) * rowsPerPage
  const paginatedData = filteredData.slice(startIndex, startIndex + rowsPerPage)

  return (
    <div className="results-table-container">
      <div className="results-table-header">
        <div className="results-count">
          {filteredData.length} {filteredData.length === 1 ? "row" : "rows"}
          {searchTerm && ` (filtered from ${rowCount})`}
        </div>
        <div className="results-search">
        <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
                type="text"
                placeholder="Search results..."
                value={searchTerm}
                onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Reset to first page on search
                }}
                className="search-input"
            />
            </div>
        </div>
      </div>

      <div className="results-table-wrapper">
        <table className="results-table">
            <thead>
            <tr>
                {columns.map((column) => (
                <th key={column}>{column}</th>
                ))}
            </tr>
            </thead>
        </table>
        <List
            height={400}
            itemCount={paginatedData.length}
            itemSize={55}             
            width={"100%"}
        >
            {({ index, style }) => {
            const row = paginatedData[index];
            return (
                <table style={style} className="results-table">
                <tbody>
                    <tr key={index} className={index % 2 === 0 ? "row-even" : ""}>
                    {columns.map((column) => (
                        <td key={`${index}-${column}`}>
                        {row[column] !== null ? row[column].toString() : "NULL"}
                        </td>
                    ))}
                    </tr>
                </tbody>
                </table>
            );
            }}
        </List>
        </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <FaArrowLeft />
            Previous
          </button>

          <div className="pagination-pages">
            {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
              let pageNumber

              // Logic to show pages around current page
              if (totalPages <= 5) {
                pageNumber = i + 1
              } else if (currentPage <= 3) {
                pageNumber = i + 1
              } else if (currentPage >= totalPages - 2) {
                pageNumber = totalPages - 4 + i
              } else {
                pageNumber = currentPage - 2 + i
              }

              return (
                <button
                  key={i}
                  className={`pagination-page ${pageNumber === currentPage ? "active" : ""}`}
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              )
            })}
          </div>

          <button
            className="pagination-btn"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
            <FaArrowRight/>
          </button>
        </div>
      )}
    </div>
  )
}

