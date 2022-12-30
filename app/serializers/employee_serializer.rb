class EmployeeSerializer < ActiveModel::Serializer
  attributes :id, :manager_id, :name, :email, :password_digest
end
