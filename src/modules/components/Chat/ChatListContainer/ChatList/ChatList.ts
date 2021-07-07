import Block from '../../../../../common/components/Block'
import { ChatSearchBar } from '../../ChatSearchBar'
import { ChatListItem } from '../ChatListItem'

import compile from '../../../../../common/utils/compile'
import { template } from './template'
import './style.css'
import { Props } from './types'
import store from "../../../../../common/services/store";
import chatController from "../../../../../common/services/controllers/chat";
import {getFormattedDate} from "../../../../../common/utils/dateHelpers";
import {ChatCreateButton} from "../../ChatCreateButton";
import Modal from "../../../../../common/components/Modal";
import {Form} from "../../../../../common/components/Form";
import Input from "../../../../../common/components/Input";

export default class ChatList extends Block<Props> {
    constructor() {
        super({
            store,
            params: {
                offset: 0,
                title: '',
                limit: 30
            },
            searchBar: new ChatSearchBar({
                onSearch: (value) => this.onSearch(value)
            }),
            events: {
                scroll: (e) => this.onScroll(e),
                click: (e) => this.onClick(e)
            },
            buttonCreate: new ChatCreateButton({
                events: {
                    click: () => this.onOpenModal()
                }
            }),
            createChatModal: new Modal({
                content: new Form({
                    formName: 'createChat',
                    title: 'Создание чата',
                    content: [
                        new Input({
                            labelName: 'Название чата',
                            inputName: 'title'
                        })
                    ],
                    events: {
                        submit: (e) => this.onCreateChat(e)
                    }
                })
            }),
        })
    }



    onOpenModal() {
        const { createChatModal } = this.props
        createChatModal.show('flex')

    }


    onCloseModal() {
        const { createChatModal } = this.props
        createChatModal.hide()

    }


    onCreateChat(e) {
        e.preventDefault()

        const formComponent = this.props.createChatModal.props.content
        const formData = new FormData(e.target as HTMLFormElement)

        const form = {
            title: formData.get('title').trim()
        }

        if (!formComponent.onValid(form)) return
        chatController.createChat(form)
        this.onCloseModal()
        chatController.getChats(this.props.params)
    }



    onSearch(value: string) {
        this.setProps({
            params: {
                ...this.props.params,
                title: value
            }
        })

        chatController.getChats(this.props.params)
    }


    onClick(e: Event) {
        if (e.target instanceof HTMLDivElement) {
            store.dispatch('setActiveChatId', e.target.dataset.chatId)
            store.dispatch('setToken', '')
        }
    }



    onScroll(e) {
        if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight) {
            const params = {
                offset: this.props.params.offset + 30,
                limit: this.props.params.limit,
                title: this.props.params.title
            }
            chatController.getChats(params)
        }
    }



    componentDidMount() {
        chatController.getChats(this.props.params)
    }



    componentDidUpdate() {
        const { chats } = store.state
        const items = chats.map(({ id, title, count, time, content }) => {
            return new ChatListItem({
                chatId: id,
                name: title,
                message: content,
                date: getFormattedDate(time),
                countMessage: count,
            })
        })
        this.setProps({
            items
        })
    }



    render() {
        const { searchBar, items, buttonCreate, createChatModal } = this.props
        return compile(template, {
            searchBar,
            items,
            buttonCreate,
            createChatModal
        })
    }
}
