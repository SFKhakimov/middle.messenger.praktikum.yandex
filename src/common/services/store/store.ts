import EventBus from "../../components/EventBus";
import {State} from "./types";

export default class Store {

    actions: Record<string, unknown>
    mutations: Record<string, unknown>
    state: State
    events: EventBus

    constructor(params) {
        let self = this

        self.actions = {}
        self.mutations = {}
        self.state = {}

        self.events = new EventBus()


        if (params.hasOwnProperty('actions')) {
            self.actions = params.actions
        }

        if (params.hasOwnProperty('mutations')) {
            self.mutations = params.mutations
        }

        self.state = this._makePropsProxy(params.state)
    }

    _makePropsProxy(params) {
        return new Proxy((params.state || {}), {
            set: function (state, key, value) {

                state[key] = value

                return true
            }
        })
    }


    dispatch(actionKey, payload) {
        let self = this

        self.actions[actionKey](self, payload)

        return true
    }

    commit(mutationKey, payload) {
        let self = this

        let newState = self.mutations[mutationKey](self.state, payload)

        self.state = Object.assign(self.state, newState)

        self.events.emit('stateChange', self.state)

        return true
    }
}
