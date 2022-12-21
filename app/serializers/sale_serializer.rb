class SaleSerializer < ActiveModel::Serializer
  attributes :id, :transaction_id, :item_id_integer, :item_id, :item_price_at_sale, :employee_id, :qty
end
