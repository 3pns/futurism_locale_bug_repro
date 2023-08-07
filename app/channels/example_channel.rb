class ExampleChannel < ApplicationCable::Channel
  def subscribed
    p "subscribed to visitors"
    stream_from "visitors"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
