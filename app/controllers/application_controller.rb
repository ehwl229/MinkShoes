class ApplicationController < ActionController::Base
  protect_from_forgery
  include SessionsHelper

  def handle_unverified_request
    sign_out
    super
  end
  
  def login_required
    if current_user.blank?
      flash[:error] = "You must sign in to access this page"
      redirect_to signin_url 
    end
  end
end
