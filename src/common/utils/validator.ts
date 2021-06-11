export function emailValidator(value: string) {
    const result = {
        isValid: true,
        errorText: '',
    };
    if (!notIsEmptyValidator(value).isValid) {
        return notIsEmptyValidator(value)
    }

    const regExp = /[a-zA-Z-\._]*@[a-zA-Z]*\.[a-zA-Z]*/gi;

    if (!regExp.test(value)) {
        result.isValid = false;
        result.errorText = 'Это поле заполненно некорректно';
        return result;
    }

    result.isValid = true;
    result.errorText = '';
    return result;
}

export function loginValidator(value: string) {
    const result = {
        isValid: true,
        errorText: '',
    };

    if (!notIsEmptyValidator(value).isValid) {
        return notIsEmptyValidator(value)
    }

    result.isValid = true;
    result.errorText = '';
    return result;
}

export function passwordValidator(pass: string, passAgain?: string) {
    const result = {
        isValid: true,
        errorText: '',
    };


    if (!notIsEmptyValidator(pass).isValid) {
        return notIsEmptyValidator(pass)
    }

    if (pass.length < 6 || pass.length > 10) {
        result.isValid = false;
        result.errorText = 'Длина пароля может быть от 6 до 10 символов';
        return result;
    }

    if (passAgain && pass !== passAgain) {
        result.isValid = false;
        result.errorText = 'Пароль не совпадает';
        return result;
    }

    result.isValid = true;
    result.errorText = '';
    return result;
}

export function notIsEmptyValidator(value: string) {
    const result = {
        isValid: true,
        errorText: '',
    };

    if (!value) {
        result.isValid = false;
        result.errorText = 'Это поле не может быть пустым';
        return result;
    }

    result.isValid = true;
    result.errorText = '';
    return result;
}

export function phoneValidator(value: string) {
    const result = {
        isValid: true,
        errorText: '',
    };
    if (!notIsEmptyValidator(value).isValid) {
        return notIsEmptyValidator(value)
    }

    const regExp = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/


    if (!regExp.test(value)) {
        result.isValid = false;
        result.errorText = 'Это поле заполненно некорректно';
        return result;
    }

    result.isValid = true;
    result.errorText = '';
    return result;

}
