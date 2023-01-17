class SalesTransactionsController < ApplicationController
    # You tried to define an association named transaction on the model Sale, 
    # but this will conflict with a method transaction already defined by Active Record
    before_action :authorized

    def create
        transaction = SalesTransaction.create(transaction_params)
        current_user.salesTransactions << transaction
        transaction.sales<< Sale.create(params[:items])
        render json: transaction, status: :created
    end

    def index
        render json:  current_user.salesTransactions
    end

    private
    
    def transaction_params
        params.permit(:change, :amount, :recieved)
    end
end
