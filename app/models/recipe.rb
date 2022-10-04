class Recipe < ApplicationRecord
    validates :name, presence: true, length: { minimum: 5 }
    validates :ingredients, :instruction, presence: true
end
