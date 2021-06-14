import Block from "../components/Block"
import compile from "./compile"

export default function renderComponent (template: string) {
    return new class extends Block<Record<string, unknown>> {
        constructor() {
            super({})
        }

        render() {
            return compile(template, {})
        }
    }
}
