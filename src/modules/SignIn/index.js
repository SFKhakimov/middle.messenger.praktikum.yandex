const form = document.forms.signin


form.addEventListener('submit', e => {
    e.preventDefault()
    const signInData = {
        [e.target.login.id]: e.target.login.value,
        [e.target.password.id]: e.target.password.value
    }

    console.log(signInData)
})
