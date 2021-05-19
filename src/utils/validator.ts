export default function validator (type: string, value: string, errorText: string, regex?: RegExp) {
    const result = {
        isValid: false,
        type,
        errorText
    }
    let reg
    switch (type) {
        case 'login':
            reg = regex || /[a-zA-Z-\._]*@[a-zA-Z]*\.[a-zA-Z]*/gi
            result.isValid = reg.test(value)
            return result
        case 'password':
            reg = regex || /[a-zA-Z/d]{6,10}/gi
            result.isValid = reg.test(value)
            return result
    }
}
