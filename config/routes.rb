# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :appointments, only: %i[create update]
      get 'available-slots', to: 'appointments#available_slots'
    end
  end
end
