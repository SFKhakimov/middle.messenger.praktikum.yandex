const modal = document.querySelector('.modal')
const addFileModal = document.querySelector('.add-file-modal')
const profileInfoImage = document.querySelector('.profile-info__image')
const profileInfoEditButton = document.querySelector('#edit-profile-button')
const editProfileModal = document.querySelector('.edit-profile-modal')
const profilePasswordEditButton = document.querySelector('#edit-password-button')
const editPasswordModal = document.querySelector('.edit-password-modal')

const editProfileForm = document.forms["edit-profile"]
const editPasswordForm = document.forms["edit-password"]


const classEditProfileModalActive = 'edit-profile-modal_active'
const classAddFileModalActive = 'add-file-modal_active'
const classModalActive = 'modal_active'
const classEditPasswordModalActive = 'edit-password-modal_active'



profileInfoImage.addEventListener('click', () => {
    modal.classList.add(classModalActive)
    addFileModal.classList.add(classAddFileModalActive)
})

profileInfoEditButton.addEventListener('click', () => {
    modal.classList.add(classModalActive)
    editProfileModal.classList.add(classEditProfileModalActive)
})

profilePasswordEditButton.addEventListener('click', () => {
    modal.classList.add(classModalActive)
    editPasswordModal.classList.add(classEditPasswordModalActive)
})

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains(classModalActive)) {
        e.target.classList.remove(classModalActive)
        if (addFileModal.classList.contains(classAddFileModalActive)) {
            addFileModal.classList.remove(classAddFileModalActive)
        }
        if (editProfileModal.classList.contains(classEditProfileModalActive)) {
            editProfileModal.classList.remove(classEditProfileModalActive)
        }
        if (editPasswordModal.classList.contains(classEditPasswordModalActive)) {
            editPasswordModal.classList.remove(classEditPasswordModalActive)
        }
    }
})

editProfileForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const editProfileData = {
        [e.target.email.name]: e.target.email.value,
        [e.target.login.name]: e.target.login.value,
        [e.target.firstName.name]: e.target.firstName.value,
        [e.target.lastName.name]: e.target.lastName.value,
        [e.target.chatName.name]: e.target.chatName.value,
        [e.target.phone.name]: e.target.phone.value,
    }

    console.log(editProfileData)
})

editPasswordForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const editPasswordData = {
        [e.target.oldPassword.name]: e.target.oldPassword.value,
        [e.target.newPassword.name]: e.target.newPassword.value,
        [e.target.passwordAgain.name]: e.target.passwordAgain.value,
    }

    console.log(editPasswordData)
})
