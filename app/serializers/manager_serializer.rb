class ManagerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password_digest, :bookshop_name, :bookshop_items_alert_limit
end
