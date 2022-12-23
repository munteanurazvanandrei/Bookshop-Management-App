class Item < ApplicationRecord
    belongs_to :manager
    has_many :sales
    has_many :salesTransactions, through: :sales
    # validates :manager_id, presence: true
end
