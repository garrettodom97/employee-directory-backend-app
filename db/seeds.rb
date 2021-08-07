# Create departments

Department.create!(name: "Engineering", code: 1, job_title: "Engineer")
Department.create!(name: "Sales", code: 2, job_title: "Salesperson")
Department.create!(name: "Marketing", code: 3, job_title: "Marketer")
Department.create!(name: "Finance", code: 4, job_title: "Accountant")
Department.create!(name: "Human Resources", code: 5, job_title: "HR Representative")

# Make a loop to generate 100 random employees using an API call to randomuser.me

100.times do
  # assign attributes from random user to variables
  result = HTTP.get("https://randomuser.me/api/")
  result = result.parse(:json)
  first_name = result["results"][0]["name"]["first"]
  last_name = result["results"][0]["name"]["last"]
  gender = result["results"][0]["gender"]
  email = result["results"][0]["email"]
  phone = result["results"][0]["phone"]
  picture = result["results"][0]["picture"]["thumbnail"]

  # generate a random department code
  department_code = rand(5) + 1

  department = Department.find_by(code: department_code)
  department_id = department.id
  job_title = department.job_title

  # create the new employee
  Employee.create!(first_name: first_name, last_name: last_name, gender: gender, email: email, phone: phone, picture: picture, department_id: department_id, job_title: job_title)
end
