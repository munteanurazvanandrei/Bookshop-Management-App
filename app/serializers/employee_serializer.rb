class EmployeeSerializer < ActiveModel::Serializer
  attributes :id, :manager_id, :name, :email
  has_many :salesTransactions
end
