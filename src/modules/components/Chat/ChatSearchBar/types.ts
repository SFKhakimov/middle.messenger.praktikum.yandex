import BaseButton from "../../../../common/components/Buttons/BaseButton/BaseButton";
import {ChatSearchInput} from "../ChatSearchInput";

export type Props = {
    button?: BaseButton
    input?: ChatSearchInput
    onSearch: (value: string) => void
}
