Rails.application.routes.draw do
    get 'editor/index'
    root 'editor#index'
    match "/notes" => 'note#index', :via => :get
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    resources :note
end
