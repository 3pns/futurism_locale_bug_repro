// Import all the channels to be used by Action Cable
import * as Futurism from '@stimulus_reflex/futurism'

console.log("init channels")
import consumer from 'channels/consumer'
import "channels/example_channel"

console.log("init Futurism")
Futurism.initializeElements()
Futurism.createSubscription(consumer)