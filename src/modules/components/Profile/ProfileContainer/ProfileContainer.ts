import Block from "../../../../common/components/Block";
import {ProfileInfo} from "../ProfileInfo";
import compile from "../../../../common/utils/compile";

import {template} from "./template";
import './styles.css'

export default class ProfileContainer extends Block {
    constructor(props) {
        super({
            ...props,
            info: new ProfileInfo()
        });

    }

    render() {
        const { info } = this.props
        return compile(template, {
            info
        })
    }

}
