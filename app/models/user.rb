# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  email      :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ActiveRecord::Base
  attr_accessible :name, :email, :password, :password_confirmation	
  before_save { |user| user.email = email.downcase }
  has_secure_password
  before_save :create_remember_token


  #paper clip
  attr_accessible :avatar
  has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/assets/missing.png"
  

  validates :name,  presence: true, length: { maximum: 50 }
  validates :email, presence: true, email: true, uniqueness: { case_sensitive: false }
  validates :password, presence: true, length: { minimum: 6 }
  validates :password_confirmation, presence: true
  after_validation { self.errors.messages.delete(:password_digest) }
  
  private

    def create_remember_token
      self.remember_token = SecureRandom.urlsafe_base64
    end
end
