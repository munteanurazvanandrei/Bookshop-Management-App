# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_12_21_073348) do
  create_table "employees", force: :cascade do |t|
    t.integer "manager_id"
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "items", force: :cascade do |t|
    t.integer "manager_id"
    t.string "name_or_title"
    t.string "manufacturer_or_author"
    t.integer "price_per_item"
    t.integer "qty"
    t.integer "total_sold"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "managers", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "bookshop_name"
    t.integer "bookshop_items_alert_limit"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sales", force: :cascade do |t|
    t.integer "transaction_id"
    t.string "item_id_integer"
    t.integer "item_id"
    t.integer "item_price_at_sale"
    t.integer "employee_id"
    t.integer "qty"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "transactions", force: :cascade do |t|
    t.integer "amount"
    t.integer "recieved"
    t.integer "change"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
