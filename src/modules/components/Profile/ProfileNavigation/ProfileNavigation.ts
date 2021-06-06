import Block from "../../../../common/components/Block";
import compile from "../../../../common/utils/compile";

import {template} from "./template";
import './styles.css'

export default class ProfileNavigation extends Block {
    constructor(props) {
        super(props);

    }

    render() {
        return compile(template, {})
    }

}
