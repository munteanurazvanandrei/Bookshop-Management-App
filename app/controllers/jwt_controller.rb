class JwtController < ApplicationController
    # checks that the user is logged out then destroys their authentication
    before_action :authorized, only: [:destroy]
    
    # create action for user creation and auth
    def create
        user = request.headers['role'] === "manager" ? Manager.find_by!(username: params[:email]) : Employee.find_by!(username: params[:email])
        # checks if the user is valid and then proceeds to encode
        if user
            token = encode_token(user_id: user.id)
            render json: { reques.headers['role'] == "manager" ? ManagerSerializer.new(user): EmployeeSerializer.new(user), token: jwt}, status: :accepted
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
