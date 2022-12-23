# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding begins here..."

5.times do |i|
    Manager.create(name:Faker::Name.name, email:Faker::Internet.email, password_digest:Faker::Internet.password, bookshop_name:Faker::Company.name, bookshop_items_alert_limit:100)
    3.times do
        Item.create(manager_id: i, name_or_title:Faker::Book.title , manufacturer_or_author:Faker::Name.name, price_per_item:100, qty: 50, total_sold:20)
        end
    5.times do |j|
        Employee.create(manager_id: i, email:Faker::Internet.email, password:Faker::Internet.password)
        2.times do 
            SalesTransaction.create(amount: 1000, recieved: 1000,change:0, employee_id:1)
            Sale.create( sales_transaction_id: , item_id:1, item_price_at_sale: 500, qty: 2)

        end
    end
end
# Manager.create(name: "Karl", email: "emailKarl@email.com", password: "Karl")


# Employee.create(manager_id: 1, email:Faker::Internet.email, password:Faker::Internet.password)


# 
# Manager.create(name: "Xarl", email: "emailXarl@email.com", password: "Xarl")
# Item.create(manager_id: 2, name_or_title: "That cool book", manufacturer_or_author: "John", price_per_item:100, qty: 50)
# Employee.create(manager_id: 2, email: "xemployee201@email.com", password: "asd")
# SalesTransaction.create(amount: 1000, recieved: 1000,change:0, employee_id:2)
# Sale.create( sales_transaction_id: 2, item_id:1, item_price_at_sale: 200, qty: 2)

puts "... Seeding ends here"