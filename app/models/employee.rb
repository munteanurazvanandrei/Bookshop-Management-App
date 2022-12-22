class Employee < ApplicationRecord
    has_secure_password
    belongs_to :manager
    has_many :sales
    has_many :transactions, through: :sales
    validates :email, uniqueness: true
end
