import Block from "../../../../common/components/Block";
import compile from "../../../../common/utils/compile";

import {template} from "./template";
import './syles.css'

export default class ProfileImage extends Block {
    constructor(props) {
        super(props);
    }

    render() {
        return compile(template, {})
    }
}
