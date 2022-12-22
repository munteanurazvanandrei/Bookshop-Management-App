class CreateSales < ActiveRecord::Migration[7.0]
  def change
    create_table :sales do |t|
      t.integer :transaction_id
      t.string :item_id_integer
      t.integer :item_id
      t.integer :item_price_at_sale, default: 0
      t.integer :qty, default: 0

      t.timestamps
    end
  end
end
