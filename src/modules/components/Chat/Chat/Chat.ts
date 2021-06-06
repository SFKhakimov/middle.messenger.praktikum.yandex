import Block from '../../../../common/components/Block';
import compile from "../../../../common/utils/compile";
import {template} from "./template";
import {ChatHeaderContainer} from "../index";

import './styles.css'
import ChatActive from "../ChatActive/ChatActive";
import ChatMessageForm from "../ChatMessageForm";

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
