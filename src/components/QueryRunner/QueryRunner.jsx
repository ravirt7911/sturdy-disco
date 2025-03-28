import { useState } from "react"
import QueryEditor from "../QueryEditor/QueryEditor"
import ResultsTable from "../ResultsTable/ResultsTable"
import QuerySelector from "../QuerySelector/QuerySelector"
import { sampleQueries } from "../../data/sampleQueries"
import { sampleData } from "../../data/sampleData"
import { QueryHistory } from "../QueryHistory/QueryHistory"
import { FaHistory,FaDownload,FaPlay } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import "./QueryRunner.css"

export default function QueryRunner() {
  const [currentQuery, setCurrentQuery] = useState(sampleQueries[0].query)
  const [results, setResults] = useState(sampleData[0])
  const [isLoading, setIsLoading] = useState(false)
  const [history, setHistory] = useState([])
  const [showHistory, setShowHistory] = useState(false)
  const [executionTime, setExecutionTime] = useState(0)
  const [activeTab, setActiveTab] = useState("results")
  const [showLargeData, setShowLargeData] = useState(false)

  const generateLargeData = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      first_name: `First ${i + 1}`,
      last_name: `Last ${i + 1}`,
      email: `user${i + 1}@example.com`,
      department: `Department ${i % 5}`,
      salary: 50000 + i,
      hire_date: "2023-01-01",
    }));
  };

  const largeData = generateLargeData(100000);


  const executeQuery = () => {
    setIsLoading(true)

    const startTime = performance.now()

    setTimeout(() => {
      const matchingQueryIndex = sampleQueries.findIndex((q) => q.query.trim() === currentQuery.trim())
      const resultData = matchingQueryIndex !== -1 ? sampleData[matchingQueryIndex] : sampleData[0]
      setResults(resultData)
      const endTime = performance.now()
      setExecutionTime((endTime - startTime) / 1000)
      setHistory((prev) => [
        {
          id: Date.now(),
          query: currentQuery,
          timestamp: new Date().toLocaleTimeString(),
          executionTime: (endTime - startTime) / 1000,
        },
        ...prev.slice(0, 9),
      ])

      setIsLoading(false)
    }, 500)
  }

  const handleQuerySelect = (query) => {
    setCurrentQuery(query.query)
  }

  const handleHistorySelect = (historyItem) => {
    setCurrentQuery(historyItem.query)
    setShowHistory(false)
  }

  const exportResults = (format) => {
    let dataStr
    let fileName

    if (format === "csv") {
      // Convert to CSV
      const headers = Object.keys(results.data[0]).join(",")
      const rows = results.data.map((row) => Object.values(row).join(",")).join("\n")
      dataStr = `${headers}\n${rows}`
      fileName = `query_results_${new Date().toISOString()}.csv`
    } else {
      // JSON format
      dataStr = JSON.stringify(results.data, null, 2)
      fileName = `query_results_${new Date().toISOString()}.json`
    }

    const dataBlob = new Blob([dataStr], { type: format === "csv" ? "text/csv" : "application/json" })
    const url = URL.createObjectURL(dataBlob)

    const a = document.createElement("a")
    a.setAttribute("href", url)
    a.setAttribute("download", fileName)
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="container">
      <header className="app-header">
        <h1 className="app-title">SQL Query Runner</h1>
        <div className="header-actions">
          <button className="btn btn-outline" onClick={() => setShowLargeData(true)}>
            <FaBoltLightning />
            Render Large Data
          </button>
          <button className="btn btn-outline" onClick={() => setShowHistory(!showHistory)}>
            <FaHistory />
            History
          </button>
        </div>
      </header>

      <div className="query-controls">
        <div className="query-selector-container">
          <QuerySelector queries={sampleQueries} onSelect={handleQuerySelect} setShowLargeData={setShowLargeData}/>
        </div>
        <div className="export-controls">
          <button className="btn btn-outline" onClick={() => exportResults("csv")}>
            <FaDownload />
            Export CSV
          </button>
          <button className="btn btn-outline" onClick={() => exportResults("json")}>
            <FaDownload />
            Export JSON
          </button>
        </div>
      </div>

      <div className="main-content">
        <div className="query-section">
          <div className="editor-container">
            <QueryEditor value={currentQuery} onChange={setCurrentQuery} />
            <div className="editor-footer">
              <div className="execution-time">
                {history.length > 0 && <span>Last execution: {executionTime.toFixed(2)}s</span>}
              </div>
              <button className="btn btn-primary" onClick={executeQuery} disabled={isLoading}>
                <FaPlay />
                {isLoading ? "Executing..." : "Run Query"}
              </button>
            </div>
          </div>

          <div className="results-container">
            <div className="tabs">
              <button
                className={`tab ${activeTab === "results" ? "active" : ""}`}
                onClick={() => setActiveTab("results")}
              >
                Results
              </button>
              <button className={`tab ${activeTab === "stats" ? "active" : ""}`} onClick={() => setActiveTab("stats")}>
                Statistics
              </button>
            </div>

            <div className="tab-content">
              {activeTab === "results" && (
                <ResultsTable data={showLargeData?largeData:results.data} isLoading={isLoading} rowCount={showLargeData?largeData.length:results.data.length} />
              )}

              {activeTab === "stats" && (
                <div className="stats-container">
                  <h3 className="stats-title">Query Statistics</h3>
                  <div className="stats-grid">
                    <div className="stat-card">
                      <p className="stat-label">Rows Returned</p>
                      <p className="stat-value">{results.data.length}</p>
                    </div>
                    <div className="stat-card">
                      <p className="stat-label">Execution Time</p>
                      <p className="stat-value">{executionTime.toFixed(2)}s</p>
                    </div>
                    <div className="stat-card">
                      <p className="stat-label">Columns</p>
                      <p className="stat-value">{results.data.length > 0 ? Object.keys(results.data[0]).length : 0}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {showHistory && (
          <div className="history-panel">
            <QueryHistory history={history} onSelect={handleHistorySelect} onClose={() => setShowHistory(false)} />
          </div>
        )}
      </div>
    </div>
  )
}

