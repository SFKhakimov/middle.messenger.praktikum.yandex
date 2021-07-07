export default {
    setUser(state, payload) {
        state.user = payload

        return state
    },

    setUsers(state, payload) {
        state.users = payload

        return state
    },

    setChats(state, payload) {
        state.chats = payload

        return state
    },

    setToken(state, payload) {
        state.token = payload

        return state
    },

    setActiveChatId(state, payload) {
        state.activeChatId = payload

        return state
    },

    setSocketStatus(state, payload) {
        state.socketStatus = payload

        return state
    },

    setSocketMessages(state, payload) {
        state.messages = [payload, ...state.messages]

        return state
    },
}
