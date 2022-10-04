require 'rails_helper'

RSpec.describe Recipe, type: :model do
  subject { Recipe.new(name: "Recipe in test", ingredients: "water, salt, sugar, BBQ, meat", instruction: "instruction 1<br> instruction 2<br>", image: "www.example.com/api/images/some_image.png")}

  it "Is valid with valid attributes" do
    expect(subject).to be_valid
  end
  it "Is not valid without name" do
    subject.name = nil
    expect(subject).to_not be_valid
  end
  it "Is not valid without ingredients" do
    subject.ingredients = nil
    expect(subject).to_not be_valid
  end
  it "Is not valid if the name is not 5 chars" do
    subject.name = "oil"
    expect(subject).to_not be_valid
  end
end
