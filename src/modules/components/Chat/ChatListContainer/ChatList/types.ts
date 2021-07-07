import { ChatSearchBar } from '../../ChatSearchBar'
import { ChatListItem } from '../ChatListItem'
import {ChatListParams} from "../../../../../common/services/api/chat/types";
import {MyEvents} from "../../../../../common/types/Event";
import {ChatCreateButton} from "../../ChatCreateButton";
import Modal from "../../../../../common/components/Modal";
import {Form} from "../../../../../common/components/Form";
import Store from "../../../../../common/services/store/store";

export type Props = {
    searchBar: ChatSearchBar
    buttonCreate: ChatCreateButton
    createChatModal: Modal<Form>
    items?: ChatListItem[]
    params: ChatListParams
    events?: MyEvents
    store: Store
}
