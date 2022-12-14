class CreateFriends < ActiveRecord::Migration[7.0]
  def change
    create_table :friends do |t|
      t.references :requester, null: false, foreign_key: { to_table: :users }
      t.references :requestee, null: false, foreign_key: { to_table: :users }
      t.boolean :accepted, null: false, default: false

      t.timestamps
    end
  end
end
