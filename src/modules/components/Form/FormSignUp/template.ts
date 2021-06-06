export const template = `form.form(name="signup")
            .form__container
                h2.form__title #{formName}
                div !{email} !{login} !{firstName} !{lastName} !{phone} !{password} !{passwordAgain}
            .form__container
                button.form__button Зарегистрироваться
                a(href="/signin.html").form__link Войти`;
