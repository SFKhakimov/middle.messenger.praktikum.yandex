import Block from "../Block";
import compile from "../../utils/compile";
import { template } from './template'

export default class Select extends Block<Record<string, unknown>> {
    constructor() {
        super({});
    }

    render() {
        return compile(template, {
            options: [{value: 'test'}]
        })
    }
}
