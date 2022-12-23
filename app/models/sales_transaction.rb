class SalesTransaction < ApplicationRecord
    has_many :sales
    belongs_to :employee
    delegate :manager, to: :employee 
    validates :employee_id, presence: true
end
