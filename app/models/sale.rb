class Sale < ApplicationRecord
    belongs_to :item
    belongs_to :transaction
    validates :transaction_id, presence: true
end
