class ManagersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    before_action :authorized
    # GET /managers
    def index
        render json: Manager.all
    end

    # GET /managers/:id
    def show
        render json: manager, status: :ok
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

    def record_not_found
        render json: { error: "Manager not found" }, status: :no_found        
    end
end
