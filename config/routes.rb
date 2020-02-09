Rails.application.routes.draw do
  get 'editor/index'
  root 'editor#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  match "/note" => "editor#save_note", :via => :post, :as => :save_note

end
