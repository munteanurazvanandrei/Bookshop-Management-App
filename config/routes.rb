Rails.application.routes.draw do
  resources :transactions
  resources :sales
  resources :items
  resources :employees
  resources :managers
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
