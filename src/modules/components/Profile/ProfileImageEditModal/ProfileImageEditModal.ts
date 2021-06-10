import Block from "../../../../common/components/Block";
import compile from "../../../../common/utils/compile";

import {template} from "./template";
import './styles.css'

export default class ProfileImageEditModal extends Block<{}> {
    constructor() {
        super({});

    }

    render() {
        return compile(template, {})
    }

}
