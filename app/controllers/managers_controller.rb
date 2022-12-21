class ManagersController < ApplicationController
    before_action :authorized
    # GET /managers
    def index
        render json: Manager.all
    end

    # POST /managers
    def create
        manager = Manager.create!(manager_params)
        if manager.valid?
    end
end
