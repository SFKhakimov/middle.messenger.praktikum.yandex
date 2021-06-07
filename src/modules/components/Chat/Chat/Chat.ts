import Block from '../../../../common/components/Block';
import { ChatHeaderContainer } from "../ChatHeader";
import { ChatMessageForm } from "../ChatMessageForm";
import { ChatActive } from "../ChatActive";

import compile from "../../../../common/utils/compile";
import {template} from "./template";
import './styles.css'

export default class Chat extends Block {
  constructor(props) {
    super({
      ...props,
      chatHeader: new ChatHeaderContainer({}),
      dialog: new ChatActive({}),
      form: new ChatMessageForm({})
    });
  }

  render() {
    const { chatHeader, dialog, form } = this.props;
    return compile(template, {
      chatHeader, dialog, form
    });
  }
}
