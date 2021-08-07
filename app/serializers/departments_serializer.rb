class DepartmentsSerializer < ActiveModel::Serializer
  attributes :id, :name, :code, :job_title, :employees

  has_many :employees
end
