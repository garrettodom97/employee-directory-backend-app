class User < ApplicationRecord
  # method from bcrypt gem to has password
  has_secure_password

  validates :email, presence: true, uniqueness: true
end
