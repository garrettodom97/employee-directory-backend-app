Rails.application.routes.draw do

  # 5 restful routes for employees
  get "/employees" => "employees#index"
  get "/employees/:id" => "employees#show"
end
