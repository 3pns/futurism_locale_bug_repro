import CableReady from 'cable_ready'
import consumer from "./consumer"

consumer.subscriptions.create("ExampleChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    this.send({ message: 'Client is live' })
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received (data) {
    console.log(data)
    if (data.cableReady) CableReady.perform(data.operations)
  }
});
