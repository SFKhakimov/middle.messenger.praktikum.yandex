import {ChatYourMessage} from "../ChatYourMessage";
import {ChatHisMessage} from "../ChatHisMessage";

export type Props = {
    messages: [] | (ChatYourMessage | ChatHisMessage)[]
}
