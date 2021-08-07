class AddJobTitleToDepartment < ActiveRecord::Migration[6.1]
  def change
    add_column :departments, :job_title, :string
  end
end
