export type Chat = {
    id: string
    title: string
    count: number
    time: string
    content: string
}

export type State = {
    user: {},
    chats: [] | Chat[],
    token: string,
    users: [],
    activeChatId: string
}
