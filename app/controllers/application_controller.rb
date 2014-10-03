class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  #protect_from_forgery with: :exception
  protect_from_forgery 
  
  after_filter :set_csrf_cookie_for_ng

  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  def index
  	render layout: layout_name
  end

private

	def layout_name
	    if params[:layout] == 0
	        false
	    else
	        'application'
	    end
	end

protected

    def verified_request?
      super || form_authenticity_token == request.headers['X-XSRF-TOKEN']
    end

end
