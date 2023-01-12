class SalesTransactionsController < ApplicationController
    # You tried to define an association named transaction on the model Sale, 
    # but this will conflict with a method transaction already defined by Active Record
    before_action :authorized

    def create
        transaction = SalesTransaction.create(transaction_params)
        transaction.sales<< Sale.create(params[:items])
    end

    def index
        render json:  current_user.salesTransactions
    end

    private
    
    def transaction_params
        params.permit(:change, :amount, :recieved)
    end
end
