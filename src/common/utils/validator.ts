export function emailValidator (value: string) {
    const result = {
        isValid: true,
        errorText: ''
    }
    if (!value) return result

    const regExp = /[a-zA-Z-\._]*@[a-zA-Z]*\.[a-zA-Z]*/gi

    if (!regExp.test(value)) {
        result.isValid = false
        result.errorText = 'Это поле заполненно некорректно'
        return result
    }

    result.isValid = true
    result.errorText = ''
    return result

}

export function loginValidator (value: string) {
    const result = {
        isValid: true,
        errorText: ''
    }
    if (!value) {
        result.isValid = false
        result.errorText = 'Это поле не может быть пустым'
        return result
    }

    result.isValid = true
    result.errorText = ''
    return result

}

export function passwordValidator (value: string) {
    const result = {
        isValid: true,
        errorText: ''
    }

    if (!value) {
        result.isValid = false
        result.errorText = 'Это поле не может быть пустым'
        return result
    }

    if (value.length < 6 || value.length > 10) {
        result.isValid = false
        result.errorText = 'Длина пароля может быть от 6 до 10 символов'
        return result
    }

    result.isValid = true
    result.errorText = ''
    return result
}
