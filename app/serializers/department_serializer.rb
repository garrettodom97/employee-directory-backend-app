class DepartmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :code, :employees

  has_many :employees
end
