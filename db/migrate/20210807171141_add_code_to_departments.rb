class AddCodeToDepartments < ActiveRecord::Migration[6.1]
  def change
    add_column :departments, :code, :integer
  end
end
