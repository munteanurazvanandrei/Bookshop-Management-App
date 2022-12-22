class JwtController < ApplicationController
    # checks that the user is logged out then destroys their authentication
    before_action :authorized, only: [:destroy]
    
    # create action for user creation and auth
    def create
        user = request.headers['role'] == "manager" ? 
            Manager.find_by!(email: params[:email]) : 
            Employee.find_by!(email: params[:email])
        # checks if the user is valid and then proceeds to encode
        if user&.authenticate(params[:password])
            token = encode_token(user_id: user.id)
            render json: { user: request.headers['role'] == "manager" ? ManagerSerializer.new(user): EmployeeSerializer.new(user), jwt: token}, status: :accepted
        else
            # Invalid response returned if wrong credentials are provided
            render json: { errors: "Invalid email or password" }, status: :unauthorized
        end
    end

    # Destroy user auth
    def destroy
        head :no_content
    end
end
