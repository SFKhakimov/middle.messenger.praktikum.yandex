import Block from "../Block";
import compile from "../../utils/compile";
import { template } from './template'
import {Props} from "./types";
import './style.css'
import store from '../../services/store'
import userController from '../../services/controllers/user'
import {DefaultInput} from "../Input/DefaultInput";

export default class Select extends Block<Props> {
    constructor() {
        super({
            store,
            input: new DefaultInput({
                name: 'addUser',
                value: '',
                placeholder: 'Введите логин пользователя',
                events: {
                    input: (e) => this.onSearch(e)
                }
            }),
            options: [],
            events: {
                click: (e) => this.onClick(e)
            },
            checked: []
        });
    }


    onClick(e) {
        const { value } = e.target
        const { checked, options } = this.props
        console.log(value)

        if (value) {
            const newChecked = checked.includes(value) ? checked.filter(item => item !==value) : [value, ...checked]

            const newOptions = options.map(({value, label}) => ({
                value,
                label,
                isChecked: newChecked.includes(String(value)),
            }))

            this.setProps({
                checked: newChecked,
                options: newOptions
            })
        }
    }



    onSearch(e) {
        userController.getUsers({ login: e.target.value })
    }



    componentDidUpdate() {
        const { checked } = this.props

        const users = store.state.users.map(({ login, id }) => ({
            value: id,
            label: login,
            isChecked: checked.includes(String(id)),
        }))

        this.setProps({
            options: users
        })

    }



    render() {
        return compile(template, this.props)
    }
}
