class AddHouseToStudents < ActiveRecord::Migration
  def change
    add_reference :students, :house, index: true
  end
end
