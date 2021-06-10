import {
    emailValidator, loginValidator, notIsEmptyValidator, passwordValidator,
} from '../utils/validator';
import { ValidatorResult } from '../utils/types';

export const VALIDATOR: Record<string, (value: string) => ValidatorResult> = {
    email: emailValidator,
    login: loginValidator,
    firstName: notIsEmptyValidator,
    lastName: notIsEmptyValidator,
    phone: notIsEmptyValidator, // TODO поменять на корректную валидацию
    password: passwordValidator,
    passwordAgain: passwordValidator,

};
