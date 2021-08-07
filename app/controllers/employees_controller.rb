class EmployeesController < ApplicationController
  # index for displaying all employees
  def index
    employees = Employee.all
    render json: employees
  end

  def show
    employee_id = params[:id]
    employee = Employee.find(employee_id)
    render json: employee
  end
end
