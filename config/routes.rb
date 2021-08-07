Rails.application.routes.draw do

  # 5 restful routes for employees
  get "/employees" => "employees#index"
  get "/employees/:id" => "employees#show"
  post "employees" => "employees#create"
  post "employees/:id" => "employees#update"
  delete "employees/:id" => "employees#destroy"

  # routes for department index and department show actions
  get "/departments" => "departments#index"
  get "/departments/:id" => "departments#show"
end
