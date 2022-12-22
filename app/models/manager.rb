class Manager < ApplicationRecord
    has_secure_password
    has_many :items
    has_many :employees
    has_many :sales, through: :employees
    has_many :transactions, through: :sales
    validates :email, presence: true, uniqueness: true
    validates :bookshop_name, presence: true
    validates :bookshop_items_alert_limit, presence: true
end
