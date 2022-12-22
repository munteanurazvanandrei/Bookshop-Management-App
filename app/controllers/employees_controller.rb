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

    # POST
    def create
        employee = Employee.create!(employee_params)
        render json: employee, status: :created
    end

    # DELETE /employees/:id
    def destroy
        employee = find_employee
        employee.destroy
        head :no_content
    end

    private
    # employee details input during creation of account
    def employee_params
        params.permit(:name, :email, :password)
    end

    # dynamically find an employee via :id
    def find_employee
        Employee.find_by!(id: params[:id])
    end

    # error validation for when an employee is not found within the database records
    def record_not_found
        render json: { error: "Employee not found" }, status: :no_found        
    end
end
