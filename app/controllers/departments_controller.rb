class DepartmentsController < ApplicationController
  # index action to show all departments
  def index
    departments = Department.all
    render json: departments
  end

  # show action to show a single department
  def show
    department_id = params[:id]
    department = Department.find(department_id)
    render json: department
  end
end
