require 'rails_helper'

RSpec.describe "Api::V1::Recipes", type: :request do
  describe "GET /api/v1/recipes" do
    it "It has HTTP status 200" do
      get '/api/v1/recipes/index'
      expect(response).to have_http_status(200)
    end
    it "API is responding with JSON" do
      get '/api/v1/recipes/index'
      expect(response.content_type).to eq "application/json; charset=utf-8"
    end
  end

  describe "GET /api/v1/recipes/show/:id" do
    let(:id) { 2 }

    it "works! (now write some real specs)" do
      get "/api/v1/recipes/index/#{id}"
      expect(response).to have_http_status(200)
    end
  end
end
