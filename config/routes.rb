Rails.application.routes.draw do

  # 5 restful routes for employees
  get "/employees" => "employees#index"
  get "/employees/:id" => "employees#show"
  post "employees" => "employees#create"
  patch "employees/:id" => "employees#update"
  delete "employees/:id" => "employees#destroy"

  # routes for department index and department show actions
  get "/departments" => "departments#index"
  get "/departments/:id" => "departments#show"

  # route for creating a user
  post "/users" => "users#create"

  # route for creating a session
  post "/sessions" => "sessions#create"

  # route for Heroku
  get "/*path" => proc { [200, {}, [ActionView::Base.new.render(file: "public/index.html")]] }
end
