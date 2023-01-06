class SalesTransactionSerializer < ActiveModel::Serializer
  attributes :employee_name, :amount, :change, :recieved
  has_many :sales

  def employee_name
    self.object.employee.name
  end
end
