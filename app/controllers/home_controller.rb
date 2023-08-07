class HomeController < ApplicationController
  include CableReady::Broadcaster
  
  def show
    # cable_ready[:home]
    #   .append("body", html: "They lay awake, wondering if there is a dog.")
    #   .broadcast
  end

end
