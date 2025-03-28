import { useRef } from "react";
import "./QueryHistory.css";
import { FaLocationArrow, FaTimes } from "react-icons/fa";

export function QueryHistory({ history, onSelect, onClose }) {
  const scrollRef = useRef(null);

  if (history.length === 0) {
    return (
      <div className="history-empty">
        <p>No query history yet</p>
        <button className="history-close-btn" onClick={onClose}>
          <FaTimes />
        </button>
      </div>

    );
  }

  return (
    <div className="history-container">
      <div className="history-header">
        <h3>Query History</h3>
        <button className="history-close-btn" onClick={onClose}>
          <FaTimes />
        </button>
      </div>
      <div className="history-list" ref={scrollRef}>
        {history.map((item) => (
          <div key={item.id} className="history-item" onClick={() => onSelect(item)}>
            <div className="history-item-content">
              <div className="history-item-query">
                {console.log(item)}
                {item.query.substring(0, 60)}
                {item.query.length > 60 ? "..." : ""}
              </div>
              <button
                className="history-item-use"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(item);
                }}
              >
                <FaLocationArrow />
              </button>
            </div>
            <div className="history-item-meta">
              <span>{item.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}