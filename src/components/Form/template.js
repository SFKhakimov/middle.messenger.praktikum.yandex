export const template = `form.form(name="signin")
            .form__container
                h2.form__title #{formName}
                div !{login} !{password}
            .form__container
                button.form__button Авторизоваться
                a(href="/signup.pug").form__link Нет аккаунта?`
