// Import all the channels to be used by Action Cable
import "./example_channel"
import * as Futurism from '@stimulus_reflex/futurism'
import consumer from "./consumer"

Futurism.initializeElements()
Futurism.createSubscription(consumer)