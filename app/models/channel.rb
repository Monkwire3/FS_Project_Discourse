# == Schema Information
#
# Table name: channels
#
#  id           :bigint           not null, primary key
#  channel_name :string           not null
#  server_id    :bigint
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Channel < ApplicationRecord
    validates :channel_name, presence: true

    belongs_to :server,
        foreign_key: :server_id,
        class_name: :Server

    has_many :messages,
        foreign_key: :channel_id,
        class_name: :Message,
        dependent: :destroy

end
