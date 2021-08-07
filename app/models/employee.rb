class Employee < ApplicationRecord
  validates :first_name, :last_name, :email, :phone, presence: true

  belongs_to :department
end
