class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :movie
  belongs_to :admin
end
