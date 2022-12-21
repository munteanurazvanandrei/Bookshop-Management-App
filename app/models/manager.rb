class Manager < ApplicationRecord
    has_secure_password
    has_many :items
    has_many :employees
    has_many :sales, through: :employees
    has_many :transactions, through: :sales
end
