import { useState, useEffect } from "react"
import Editor from "@monaco-editor/react"
import "./QueryEditor.css"

export default function QueryEditor({ value, onChange }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleEditorChange = (value) => {
    onChange(value)
  }

  if (!mounted) {
    return (
      <div className="editor-loading">
        <div className="editor-loading-placeholder"></div>
      </div>
    )
  }

  return (
    <div className="query-editor">
      <Editor
        height="250px"
        defaultLanguage="sql"
        value={value}
        onChange={handleEditorChange}
        options={{
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          fontSize: 14,
          tabSize: 2,
          wordWrap: "on",
          automaticLayout: true,
        }}
        theme="vs"
      />
    </div>
  )
}

