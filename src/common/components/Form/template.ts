export const template = `form.form(name=formName)
                            .form__container
                                h2.form__title !{title}
                                | !{content}
                            .form__container
                                button.form__button !{buttonText}
                                if isRenderLink
                                    .form__link !{buttonLink}`
