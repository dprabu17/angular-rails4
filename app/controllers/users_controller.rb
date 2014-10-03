class UsersController < ApplicationController
	respond_to :json

	def index
		respond_with(@users = User.all)
	end

	def show
		respond_with(@user = User.find(params[:id]))
	end

	def create
		puts "create"
		puts params.inspect
		respond_with(@user = User.create(user_params))
	end

	def update		
		respond_with(@user = User.update(params[:id],params[:user]))
	end

	def destroy
		puts "destroy"
		puts params.inspect
		respond_with(@user = User.destroy(params[:id]))
	end

private

  def user_params
    params.require(:user).permit(:name)
  end
end
