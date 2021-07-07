export default {
    setUser(context, payload) {
        context.commit('setUser', payload)
    },

    setUsers(context, payload) {
        context.commit('setUsers', payload)
    },

    setChats(context, payload) {
        context.commit('setChats', payload)
    },

    setToken(context, payload) {
        context.commit('setToken', payload)
    },

    setActiveChatId(context, payload) {
        context.commit('setActiveChatId', payload)
    },

    setSocketStatus(context, payload) {
        context.commit('setSocketStatus', payload)
    },

    setSocketMessages(context, payload) {
        context.commit('setSocketMessages', payload)
    }
}
