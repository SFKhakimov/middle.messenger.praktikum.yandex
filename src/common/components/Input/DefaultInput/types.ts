import {MyEvents} from "../../../types/Event";

export type Props = {
    name: string
    value: string
    placeholder?: string
    type?: HTMLInputElement['type']
    events?: MyEvents
}
