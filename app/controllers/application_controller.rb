class ApplicationController < ActionController::Base
  around_action :set_locale

  def set_locale(&action)
    I18n.with_locale(:es, &action)
  end
end
