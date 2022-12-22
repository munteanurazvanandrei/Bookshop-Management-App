class CreateManagers < ActiveRecord::Migration[7.0]
  def change
    create_table :managers do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :bookshop_name
      t.integer :bookshop_items_alert_limit

      t.timestamps
    end
  end
end
