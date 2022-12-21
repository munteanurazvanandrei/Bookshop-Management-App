class ApplicationController < ActionController::API
rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_method

    def encode_token
        JWT.encode(payload, 'pass_phrase')
    end

    def auth_header
        request.headers['Authorization']
    end

    def decoded_token
        if auth_header
            token = auth_header.split(' ')[1]
            begin
                JWT.decode(token, 'pass_phrase', true, algorithm: 'HS256')
            rescue JWT::DecodeError
                nil
            end
        end
    end

    def current_user
        if decoded_token
            user_id = decoded_token[0]['user_id']
            @user = User.find_by(id: user_id)
        end
    end

    def logged_in?
        !!current_user
    end

    def authorized
        render json: { message: 'Please sign in' }, status: :unauthorized unless logged_in?
    end

    private

    def unprocessable_entity_method entity
        render json: { errors: entity.record.errors.full_messages },status: :unprocessable_entity
    end
end
