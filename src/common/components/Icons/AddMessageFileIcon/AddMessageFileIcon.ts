import Block from "../../Block";
import compile from "../../../utils/compile";
import {template} from "./template";

export default class AddMessageFileIcon extends Block {
    constructor() {
        super();
    }

    render() {
        return compile(template, {})
    }
}
