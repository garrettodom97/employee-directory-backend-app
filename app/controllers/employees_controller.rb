class EmployeesController < ApplicationController
  # restrict create, update, and destroy actions to a signed in user
  before_action :authenticate_user, except: [:index, :show]

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

  # create action for making a new employee instance
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

  # update action for editing employee attributes
  def update
    employee = Employee.find(params[:id])
    employee.first_name = params[:first_name] || employee.first_name
    employee.last_name = params[:last_name] || employee.last_name
    employee.gender = params[:gender] || employee.gender
    employee.email = params[:email] || employee.email
    employee.phone = params[:phone] || employee.phone
    employee.picture = params[:picture] || employee.picture
    employee.department_id = Department.find_by(code: params[:department_code]).id || employee.department_id
    employee.job_title = Department.find_by(code: params[:department_code]).job_title || employee.job_title
    if employee.save
      render json: employee
    else
      render json: { errors: employee.errors.full_messages }, status: 422
    end
  end

  # destroy action for deleting a user
  def destroy
    employee = Employee.find(params[:id])
    employee.destroy
    render json: { messsages: "Employee successfully deleted" }
  end
end
