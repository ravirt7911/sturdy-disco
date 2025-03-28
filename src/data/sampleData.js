export const sampleData = [
    {
      // Query 1: Select all employees
      data: [
        {
          id: 1,
          first_name: "John",
          last_name: "Doe",
          email: "john.doe@example.com",
          department: "Engineering",
          salary: 85000,
          hire_date: "2022-03-15",
        },
        {
          id: 2,
          first_name: "Jane",
          last_name: "Smith",
          email: "jane.smith@example.com",
          department: "Marketing",
          salary: 75000,
          hire_date: "2021-11-20",
        },
        {
          id: 3,
          first_name: "Michael",
          last_name: "Johnson",
          email: "michael.j@example.com",
          department: "Engineering",
          salary: 92000,
          hire_date: "2020-06-10",
        },
        {
          id: 4,
          first_name: "Emily",
          last_name: "Williams",
          email: "emily.w@example.com",
          department: "HR",
          salary: 68000,
          hire_date: "2023-01-05",
        },
        {
          id: 5,
          first_name: "David",
          last_name: "Brown",
          email: "david.b@example.com",
          department: "Finance",
          salary: 95000,
          hire_date: "2021-04-22",
        },
        {
          id: 6,
          first_name: "Sarah",
          last_name: "Miller",
          email: "sarah.m@example.com",
          department: "Marketing",
          salary: 78000,
          hire_date: "2022-09-30",
        },
        {
          id: 7,
          first_name: "James",
          last_name: "Wilson",
          email: "james.w@example.com",
          department: "Engineering",
          salary: 88000,
          hire_date: "2020-12-15",
        },
        {
          id: 8,
          first_name: "Jessica",
          last_name: "Taylor",
          email: "jessica.t@example.com",
          department: "Product",
          salary: 82000,
          hire_date: "2022-07-18",
        },
        {
          id: 9,
          first_name: "Robert",
          last_name: "Anderson",
          email: "robert.a@example.com",
          department: "Engineering",
          salary: 90000,
          hire_date: "2021-08-11",
        },
        {
          id: 10,
          first_name: "Lisa",
          last_name: "Thomas",
          email: "lisa.t@example.com",
          department: "HR",
          salary: 65000,
          hire_date: "2023-02-28",
        },
        {
          id: 11,
          first_name: "Daniel",
          last_name: "Jackson",
          email: "daniel.j@example.com",
          department: "Finance",
          salary: 98000,
          hire_date: "2020-05-19",
        },
        {
          id: 12,
          first_name: "Jennifer",
          last_name: "White",
          email: "jennifer.w@example.com",
          department: "Marketing",
          salary: 76000,
          hire_date: "2022-01-14",
        },
        {
          id: 13,
          first_name: "Matthew",
          last_name: "Harris",
          email: "matthew.h@example.com",
          department: "Engineering",
          salary: 89000,
          hire_date: "2021-10-05",
        },
        {
          id: 14,
          first_name: "Amanda",
          last_name: "Martin",
          email: "amanda.m@example.com",
          department: "Product",
          salary: 84000,
          hire_date: "2022-11-22",
        },
        {
          id: 15,
          first_name: "Christopher",
          last_name: "Thompson",
          email: "chris.t@example.com",
          department: "Engineering",
          salary: 91000,
          hire_date: "2020-09-08",
        },
      ],
    },
    {
      // Query 2: Employee count by department
      data: [
        { department: "Engineering", employee_count: 5 },
        { department: "Marketing", employee_count: 3 },
        { department: "Finance", employee_count: 2 },
        { department: "HR", employee_count: 2 },
        { department: "Product", employee_count: 2 },
        { department: "Sales", employee_count: 1 },
      ],
    },
    {
      // Query 3: High salary employees
      data: [
        { id: 11, first_name: "Daniel", last_name: "Jackson", email: "daniel.j@example.com", salary: 98000 },
        { id: 5, first_name: "David", last_name: "Brown", email: "david.b@example.com", salary: 95000 },
        { id: 15, first_name: "Christopher", last_name: "Thompson", email: "chris.t@example.com", salary: 91000 },
        { id: 9, first_name: "Robert", last_name: "Anderson", email: "robert.a@example.com", salary: 90000 },
        { id: 13, first_name: "Matthew", last_name: "Harris", email: "matthew.h@example.com", salary: 89000 },
        { id: 7, first_name: "James", last_name: "Wilson", email: "james.w@example.com", salary: 88000 },
        { id: 1, first_name: "John", last_name: "Doe", email: "john.doe@example.com", salary: 85000 },
        { id: 14, first_name: "Amanda", last_name: "Martin", email: "amanda.m@example.com", salary: 84000 },
        { id: 8, first_name: "Jessica", last_name: "Taylor", email: "jessica.t@example.com", salary: 82000 },
      ],
    },
    {
      // Query 4: Recent hires
      data: [
        { id: 10, first_name: "Lisa", last_name: "Thomas", hire_date: "2023-02-28", department: "HR" },
        { id: 4, first_name: "Emily", last_name: "Williams", hire_date: "2023-01-05", department: "HR" },
        { id: 14, first_name: "Amanda", last_name: "Martin", hire_date: "2022-11-22", department: "Product" },
        { id: 6, first_name: "Sarah", last_name: "Miller", hire_date: "2022-09-30", department: "Marketing" },
        { id: 8, first_name: "Jessica", last_name: "Taylor", hire_date: "2022-07-18", department: "Product" },
        { id: 1, first_name: "John", last_name: "Doe", hire_date: "2022-03-15", department: "Engineering" },
        { id: 12, first_name: "Jennifer", last_name: "White", hire_date: "2022-01-14", department: "Marketing" },
      ],
    },
    {
      // Query 5: Department salary statistics
      data: [
        { department: "Finance", avg_salary: 96500, min_salary: 95000, max_salary: 98000 },
        { department: "Engineering", avg_salary: 89000, min_salary: 85000, max_salary: 92000 },
        { department: "Product", avg_salary: 83000, min_salary: 82000, max_salary: 84000 },
        { department: "Marketing", avg_salary: 76333, min_salary: 75000, max_salary: 78000 },
        { department: "HR", avg_salary: 66500, min_salary: 65000, max_salary: 68000 },
      ],
    },
    {
      // Query 6: Employee projects
      data: [
        {
          first_name: "John",
          last_name: "Doe",
          project_name: "Website Redesign",
          start_date: "2023-01-10",
          end_date: "2023-04-15",
        },
        {
          first_name: "Michael",
          last_name: "Johnson",
          project_name: "Mobile App Development",
          start_date: "2022-11-05",
          end_date: "2023-05-20",
        },
        {
          first_name: "Jane",
          last_name: "Smith",
          project_name: "Marketing Campaign",
          start_date: "2023-02-15",
          end_date: "2023-03-30",
        },
        {
          first_name: "Emily",
          last_name: "Williams",
          project_name: "Employee Onboarding",
          start_date: "2023-03-01",
          end_date: "2023-04-15",
        },
        {
          first_name: "David",
          last_name: "Brown",
          project_name: "Financial Audit",
          start_date: "2023-01-20",
          end_date: "2023-02-28",
        },
        {
          first_name: "Robert",
          last_name: "Anderson",
          project_name: "Database Migration",
          start_date: "2022-12-10",
          end_date: "2023-03-15",
        },
        {
          first_name: "Jessica",
          last_name: "Taylor",
          project_name: "Product Launch",
          start_date: "2023-04-01",
          end_date: "2023-06-30",
        },
        {
          first_name: "James",
          last_name: "Wilson",
          project_name: "API Integration",
          start_date: "2023-02-05",
          end_date: "2023-04-10",
        },
      ],
    },
  ]
  
  