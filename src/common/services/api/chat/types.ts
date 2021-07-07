import {User} from "../auth/types";

export type ChatItem = {
    id: number,
    title: string,
    avatar: string,
    unread_count: number,
    last_message: LastMessage
}

export type AddUserParams = {
    users: string[]
    chatId: string
}

export type LastMessage = {
    last_message: {
        user: Omit<User, 'display_name' | 'email' | 'id'>,
        time: string,
        content: string
    }
}

export type ChatListParams = {
    limit?: number
    title?: string
    offset: number
}

export type ChatCreateParams = {
    title: string
}
