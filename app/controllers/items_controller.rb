class ItemsController < ApplicationController
    before_action :authorized
    before_action :is_manager?, except: [:index]
    
    def create
        item = Item.create!(item_params)
        render json: item, status: :created
    end

    def update
        item = Item.find(params[:id])
        item.update(item_params)
        render json: item, status: :accepted
    end

    def index
        user = current_user
        items = current_user.is_a?(Manager) ? current_user.items : current_user.manager.items
        render json: items
    end

    def destroy
        if current_user.is_a?(Manager)
            Item.find(params[:id]).destroy
            head :no_content
        else
            render json: {message: "Kindly login as Manager"}, status: :unauthorized
        end
    end

    private
    def item_params
        params.permit(:manager_id, :name_or_title, :manufacturer_or_author, :price_per_item, :qty, :active)
    end
end
