class EmployeesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    before_action :authorized
    # GET /employees
    def index
        render json: Employee.all
    end

    # GET /employees/:id
    def show
        render json: employee, status: :ok
    end

    # DELETE /employees/:id
    def destroy
        employee = find_employee
        employee.destroy
        head :no_content
    end

    private

    def find_employee
        Employee.find_by!(id: params[:id])
    end

    def record_not_found
        render json: { error: "Employee not found" }, status: :no_found        
    end
end
