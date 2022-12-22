class ManagersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    before_action :authorized, except: [:create]
    # GET /managers
    def index
        render json: Manager.all
    end

    # GET /managers/:id
    def show
        render json: manager, status: :ok
    end

    # POST
    def create
        manager = Manager.create!(manager_params)
        render json: manager, status: :created
    end

    # DELETE /managers/:id
    def destroy
        manager = find_manager
        manager.destroy
        head :no_content
    end

    private

    def find_manager
        Manager.find_by!(id: params[:id])
    end

    def manager_params
        params.permit(:username, :email, :password, :confirm_password, :bookshop_name, :bookshop_items_alert_limit)
    end
    def record_not_found
        render json: { error: "Manager not found" }, status: :no_found        
    end
end
