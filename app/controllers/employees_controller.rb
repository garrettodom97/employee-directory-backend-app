class EmployeesController < ApplicationController
  # index for displaying all employees
  def index
    employees = Employee.all
    render json: employees
  end

  # show action for displaying a single employee
  def show
    employee_id = params[:id]
    employee = Employee.find(employee_id)
    render json: employee
  end

  def create
    employee = Employee.new(
      first_name: params[:first_name],
      last_name: params[:last_name],
      gender: params[:gender],
      email: params[:email],
      phone: params[:phone],
      picture: params[:picture],
      department_id: Department.find_by(code: params[:department_code]).id,
      job_title: Department.find_by(code: params[:department_code]).job_title,
    )
    if employee.save
      render json: employee
    else
      render json: { errors: employee.errors.full_messages }, status: 422
    end
  end
end
