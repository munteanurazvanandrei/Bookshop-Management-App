class Sale < ApplicationRecord
    belongs_to :item
    delegate :salesTransaction, to: :item
    # validates :sales_transaction_id, presence: true
end
