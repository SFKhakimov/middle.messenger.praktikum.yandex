import Store from "../../services/store/store";
import {DefaultInput} from "../Input/DefaultInput";
import {MyEvents} from "../../types/Event";

export type Option = {
    label: string
    value: string
}

export type Props = {
    input: DefaultInput
    options: Option[]
    store: Store
    events: MyEvents
    checked: string[] | []
}
