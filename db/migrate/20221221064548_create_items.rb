class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.integer :manager_id
      t.string :name_or_title
      t.string :manufacturer_or_author
      t.integer :price_per_item
      t.integer :qty
      t.integer :total_sold

      t.timestamps
    end
  end
end
