const form = document.forms.signup

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const signUpData = {
        [e.target.email.id]: e.target.email.value,
        [e.target.login.id]: e.target.login.value,
        [e.target.firstName.id]: e.target.firstName.value,
        [e.target.lastName.id]: e.target.lastName.value,
        [e.target.phone.id]: e.target.phone.value,
        [e.target.password.id]: e.target.password.value,
        [e.target.passwordAgain.id]: e.target.passwordAgain.value
    }

    console.log(signUpData)
})
