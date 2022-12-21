class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.integer :amount
      t.integer :recieved
      t.integer :change

      t.timestamps
    end
  end
end
