# Web-based SQL Query Interface

## Deployed Web App
[Visit the Web App](https://sturdy-disco-seven.vercel.app/)

---

## About
The project is a web-based SQL query interface designed to accept user-inputted SQL queries and display corresponding data tables. While the queries don't run against a real database, predefined query results are displayed for demonstration purposes. The app allows users to select queries from a dropdown menu, making it easy to explore multiple query outputs.

### Features
- Write and execute SQL queries with syntax highlighting.
- Real-time query execution & view query results in a tabular format.
- Access sample queries and data.
- Real-time query statistics.
- Search across data.
- Track query execution history.
- Export results in CSV or JSON format.
- Virtualized rendering for large datasets.

---

## Performance Optimizations
- Virtualized table rendering for large datasets.
- Efficient state management.
- Optimized re-renders.
- Lazy loading of components.
- Debounced query execution.

---

## Technology Stack
- **React.js** - Modern UI library for building user interfaces.
- **JavaScript** - Modern JavaScript features and syntax.
- **CSS3** - Styling and responsive design.

### Additional Dependencies
- **monaco-editor/react**
  - Professional-grade code editor.
  - SQL syntax highlighting.
  - Customizable editor options.
- **react-window**
  - Efficient rendering of large lists and tables.
  - Virtual scrolling for better performance.
  - Memory optimization for large datasets.
- **react-icons**
  - Comprehensive icon library.
  - Multiple icon sets (Font Awesome, Material Design, etc.).

---

## Component Structure
### QueryRunner
- Main container component.
- Manages application state.
- Coordinates between components.
- Handles query execution.

### QueryEditor
- SQL editor component.
- Monaco editor integration.
- Syntax highlighting.

### ResultsTable
- Data display component.
- Virtualized rendering.
- Sorting and filtering.
- Export functionality.

### QueryHistory
- History tracking component.
- Stores executed queries.
- Allows query reuse.
- Shows execution metrics.

---

## Data Flow
1. User writes/selects a query in **QueryEditor**.
2. **QueryRunner** executes the query.
3. Results are processed and stored.
4. **ResultsTable** displays the data.
5. **QueryHistory** is updated.
6. User can export results or select from history.

---

## Key Features in Depth
1. **SQL Query Input Area**: A user-friendly code editor where users can type SQL queries.
   - Utilizes the [Monaco Editor](https://microsoft.github.io/monaco-editor/) for syntax highlighting and better user experience.
 
 <img width="1338" alt="Screenshot 2025-03-29 at 11 19 50 PM" src="https://github.com/user-attachments/assets/990025d6-11a6-47dd-b967-b203f9faf929" />

  
2. **Predefined Queries Dropdown**: Toggle between multiple predefined queries for convenience.
   <img width="1348" alt="Screenshot 2025-03-29 at 11 21 59 PM" src="https://github.com/user-attachments/assets/c196e257-2146-4500-b78e-033b07c6ff57" />


3. **Data Display Table**: Mock results linked to the selected queries are displayed when you select a query and click the "Run Query" button.

<img width="1388" alt="Screenshot 2025-03-29 at 11 23 27 PM" src="https://github.com/user-attachments/assets/a5ea6c49-19b0-426b-9132-00c0cb8c7938" />

4. **Search Results**: Search across your results by typing what you need.

<img width="1348" alt="Screenshot 2025-03-29 at 11 25 56 PM" src="https://github.com/user-attachments/assets/e973676d-c729-45be-8a63-382a39810dd1" />


5. **Render Large Data**: Render large data on the app without crashes.
<img width="503" alt="Screenshot 2025-03-29 at 11 26 55 PM" src="https://github.com/user-attachments/assets/245df4b8-bb01-4f4b-b1a6-1daf275f6a18" />

<img width="1326" alt="Screenshot 2025-03-29 at 11 27 25 PM" src="https://github.com/user-attachments/assets/343a8c48-bb05-41d4-acaf-f4f5d357f7fa" />



6. **Query Statistics Data**: Displays execution time, rows returned, and columns returned.

<img width="1317" alt="Screenshot 2025-03-29 at 11 27 55 PM" src="https://github.com/user-attachments/assets/6a958f56-a5d8-4751-8f8a-0a8fcdcef446" />



7. **Export Query Results**: Export query results as CSV or JSON if necessary.

<img width="630" alt="Screenshot 2025-03-29 at 11 28 15 PM" src="https://github.com/user-attachments/assets/40015c7c-09f9-4322-aba8-68a3b5c72c37" />



8. **Query History**: View the history of queries you ran on the editor along with the timestamp.

<img width="390" alt="Screenshot 2025-03-29 at 11 28 35 PM" src="https://github.com/user-attachments/assets/70820bec-40a7-47af-aedf-025cd677a100" />

---

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sql-query-runner
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Project Structure

```
src/
├── components/
│   ├── QueryRunner/     # Main container component
│   ├── QueryEditor/     # SQL editor component
│   ├── ResultsTable/    # Results display component
│   └── QueryHistory/    # Query history component
├── data/
│   ├── sampleData.js    # Sample query results
│   └── sampleQueries.js # Sample SQL queries
├── App.js               # Root component
└── index.js            # Application entry point
```
