import {
    emailValidator, loginValidator, notIsEmptyValidator, passwordValidator, phoneValidator,
} from '../utils/validator'
import { ValidatorResult } from '../utils/types'

export const VALIDATOR: Record<string, (value: string, againValue?: string) => ValidatorResult> = {
    email: emailValidator,
    login: loginValidator,
    firstName: notIsEmptyValidator,
    lastName: notIsEmptyValidator,
    phone: phoneValidator,
    oldPassword: passwordValidator,
    password: passwordValidator,
    passwordAgain: passwordValidator,
    nickName: notIsEmptyValidator,
}
