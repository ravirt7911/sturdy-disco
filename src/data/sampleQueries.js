export const sampleQueries = [
    {
      id: "query1",
      name: "Select all employees",
      query: "SELECT * FROM employees;",
    },
    {
      id: "query2",
      name: "Employee count by department",
      query:
        "SELECT department, COUNT(*) as employee_count FROM employees GROUP BY department ORDER BY employee_count DESC;",
    },
    {
      id: "query3",
      name: "High salary employees",
      query: "SELECT id, first_name, last_name, email, salary FROM employees WHERE salary > 80000 ORDER BY salary DESC;",
    },
    {
      id: "query4",
      name: "Recent hires",
      query:
        "SELECT id, first_name, last_name, hire_date, department FROM employees WHERE hire_date > '2023-01-01' ORDER BY hire_date DESC;",
    },
    {
      id: "query5",
      name: "Department salary statistics",
      query:
        "SELECT department, AVG(salary) as avg_salary, MIN(salary) as min_salary, MAX(salary) as max_salary FROM employees GROUP BY department ORDER BY avg_salary DESC;",
    },
    {
      id: "query6",
      name: "Employee projects",
      query:
        "SELECT e.first_name, e.last_name, p.project_name, p.start_date, p.end_date FROM employees e JOIN employee_projects ep ON e.id = ep.employee_id JOIN projects p ON ep.project_id = p.id ORDER BY p.start_date DESC;",
    },
  ]
  
  