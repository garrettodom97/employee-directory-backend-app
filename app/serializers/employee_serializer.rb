class EmployeeSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :gender, :email, :phone, :picture, :job_title, :department

  belongs_to :department
end
