class ItemSerializer < ActiveModel::Serializer
  attributes :id, :manager_id, :name_or_title, :manufacturer_or_author, :price_per_item, :qty, :total_sold
end
