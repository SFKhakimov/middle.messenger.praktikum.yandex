import Block from "../../../../common/components/Block";
import {ChatSearchBar} from '../index'
import compile from "../../../../common/utils/compile";
import {template} from "./template";

export default class ChatList extends Block {
    constructor() {
        super({
            searchBar: new ChatSearchBar()
        });
    }

    render() {
        const { searchBar } = this.props
        return compile(template, {
            searchBar
        })
    }
}
