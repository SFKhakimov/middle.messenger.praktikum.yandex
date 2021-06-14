export const template = `.input-field
                label.input-field__label(for=inputName) #{labelName}
                input.input-field__input(id=inputName name=inputName placeholder=placeholder type=type value=inputValue)
                p.input-field__error-text #{errorText}`
