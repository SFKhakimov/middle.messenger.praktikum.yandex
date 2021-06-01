import { emailValidator, loginValidator, passwordValidator } from "../utils/validator";
import { ValidatorResult } from "../utils/types";

export const VALIDATOR: Record<string, (value: string) => ValidatorResult> = {
    email: emailValidator,
    login: loginValidator,
    password: passwordValidator
}
