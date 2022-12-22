# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Manager.create(name: "Karl", email: "emailKarl@email.com", password: "Karl")
Item.create(manager_id: 1, name_or_title: "That cool book", manufacturer_or_author: "John", price_per_item:100, qty: 50)
Employee.create(manager_id: 1, email: "employee201@email.com", password: "asd")
SalesTransaction.create(amount: 1000, recieved: 1000,change:0, employee_id:1)
Sale.create( sales_transaction_id: 1, item_id:1, item_price_at_sale: 500, qty: 2)
# 