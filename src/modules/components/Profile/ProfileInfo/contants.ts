import {ProfileInfoField} from "../ProfileInfoField"
import Input from "../../../../common/components/Input"

export const PROFILE_INFO_FIELDS = [
    new ProfileInfoField({
        label: 'Почта',
        value: 'test@mail.ru',
    }),
    new ProfileInfoField({
        label: 'Логин',
        value: 'test',
    }),
    new ProfileInfoField({
        label: 'Имя',
        value: 'Иван',
    }),
    new ProfileInfoField({
        label: 'Фамилия',
        value: 'Иванов',
    }),
    new ProfileInfoField({
        label: 'Имя в чате',
        value: 'Ivan',
    }),
    new ProfileInfoField({
        label: 'Телефон',
        value: '+79999999999',
    }),
]

export const EDIT_INFO_FIELDS = [
    new Input({
        inputName: 'email',
        labelName: 'Почтв',
        type: 'text',
    }),
    new Input({
        inputName: 'login',
        labelName: 'Логин',
        type: 'text',
    }),
    new Input({
        inputName: 'firstName',
        labelName: 'Имя',
        type: 'text',
    }),
    new Input({
        inputName: 'lastName',
        labelName: 'Фамилия',
        type: 'text',
    }),
    new Input({
        inputName: 'nickName',
        labelName: 'Имя в чате',
        type: 'text',
    }),
    new Input({
        inputName: 'phone',
        labelName: 'Телефон',
        type: 'text',
    }),
]

export const EDIT_PASSWORD_FIELDS = [
    new Input({
        inputName: 'oldPassword',
        labelName: 'Старый пароль',
        type: 'password',
    }),
    new Input({
        inputName: 'password',
        labelName: 'Новый пароль',
        type: 'password',
    }),
    new Input({
        inputName: 'passwordAgain',
        labelName: 'Пароль еще раз',
        type: 'password',
    }),
]
