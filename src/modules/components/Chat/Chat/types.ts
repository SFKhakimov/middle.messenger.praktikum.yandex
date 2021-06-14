import { ChatHeaderContainer } from '../ChatHeader'
import { ChatActive } from '../ChatActive'
import { ChatMessageForm } from '../ChatMessageForm'

export type Props = {
  chatHeader: ChatHeaderContainer,
  dialog: ChatActive,
  form: ChatMessageForm
};
