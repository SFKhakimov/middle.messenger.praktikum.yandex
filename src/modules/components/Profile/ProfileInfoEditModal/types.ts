import Input from '../../../../common/components/Input'
import {Form} from "../../../../common/components/Form"
import {MyEvents} from "../../../../common/types/Event"

export type Props = {
    title: string
    content: Input[]
    form?: Form
    formName: string
    events?: MyEvents
};
