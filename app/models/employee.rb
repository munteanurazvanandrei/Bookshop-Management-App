class Employee < ApplicationRecord
    has_secure_password
    belongs_to :manager
    has_many :transactions
    has_many :sales, through: :transactions
    validates :email, uniqueness: true
end
