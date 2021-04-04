const editUserButton = document.querySelector('.chat-active-user__button')
const editUserPopper = document.querySelector('.chat-edit-user-popper')
const chatAddDocumentPopperButton = document.querySelector('.chat-message-form__add-file-button')
const chatAddDocumentPopper = document.querySelector('.chat-add-document-popper')
const chatEditUserContainer = document.querySelector('.chat-active-user__edit-container')
const chatMessageForm = document.querySelector('.chat-message-form')
const addUserButton = document.querySelector('#add-user-button')
const deleteUserButton = document.querySelector('#delete-user-button')
const addUserModal = document.querySelector('.add-user-modal')
const deleteUserModal = document.querySelector('.delete-user-modal')
const modal = document.querySelector('.modal')

const classChatAddDocumentPopperActive = 'chat-add-document-popper_active'
const classEditUserPopperActive = 'chat-edit-user-popper_active'
const classPopperBackgroundActive = 'popper-background_active'
const classPopperBackground = 'popper-background'
const classAddUserModalActive = 'add-user-modal_active'
const classDeleteUserModalActive = 'delete-user-modal_active'
const classModalActive = 'modal_active'


editUserButton.addEventListener('click', (e) => {
    editUserPopper.classList.add(classEditUserPopperActive)
    chatEditUserContainer.querySelector(`.${classPopperBackground}`).classList.add(classPopperBackgroundActive)
})

chatEditUserContainer.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target.classList.contains(classPopperBackgroundActive)) {
        e.target.classList.remove(classPopperBackgroundActive)
        editUserPopper.classList.remove(classEditUserPopperActive)
    }
})

addUserButton.addEventListener('click', (e) => {
    addUserModal.classList.add(classAddUserModalActive)
    modal.classList.add(classModalActive)
})

modal.addEventListener('click', e => {
    if (e.target.classList.contains(classModalActive)) {
        e.target.classList.remove(classModalActive)
        if (addUserModal.classList.contains(classAddUserModalActive)) {
            addUserModal.classList.remove(classAddUserModalActive)
        }

        if (deleteUserModal.classList.contains(classDeleteUserModalActive)) {
            deleteUserModal.classList.remove(classDeleteUserModalActive)
        }
    }
})

deleteUserButton.addEventListener('click', (e) => {
    deleteUserModal.classList.add(classDeleteUserModalActive)
    modal.classList.add(classModalActive)
})


chatAddDocumentPopperButton.addEventListener('click', (e) => {
    chatAddDocumentPopper.classList.add(classChatAddDocumentPopperActive)
    chatMessageForm.querySelector(`.${classPopperBackground}`).classList.add(classPopperBackgroundActive)
})


chatMessageForm.addEventListener('click', (e) => {
    if (e.target.classList.contains(classPopperBackgroundActive)) {
        e.target.classList.remove(classPopperBackgroundActive)
        chatAddDocumentPopper.classList.remove(classChatAddDocumentPopperActive)
    }
})
