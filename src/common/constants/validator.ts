import {
    emailValidator, loginValidator, notIsEmptyValidator, passwordValidator, phoneValidator,
} from '../utils/validator'
import { ValidatorResult } from '../utils/types'

export const VALIDATOR: Record<string, (value: string, againValue?: string) => ValidatorResult> = {
    email: emailValidator,
    login: loginValidator,
    first_name: notIsEmptyValidator,
    second_name: notIsEmptyValidator,
    phone: phoneValidator,
    oldPassword: passwordValidator,
    password: passwordValidator,
    passwordAgain: passwordValidator,
    nickName: notIsEmptyValidator,
    title: notIsEmptyValidator,
}
