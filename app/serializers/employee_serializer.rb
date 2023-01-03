class EmployeeSerializer < ActiveModel::Serializer
  attributes :manager_id, :name, :email
  has_many :salesTransactions
end
