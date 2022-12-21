class CreateSales < ActiveRecord::Migration[7.0]
  def change
    create_table :sales do |t|
      t.integer :transaction_id
      t.string :item_id_integer
      t.integer :item_id
      t.integer :item_price_at_sale
      t.integer :employee_id
      t.integer :qty

      t.timestamps
    end
  end
end
