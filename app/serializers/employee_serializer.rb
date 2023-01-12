class EmployeeSerializer < ActiveModel::Serializer
  attributes :id, :manager_id, :name, :email, :active
  has_many :salesTransactions
end
