export const template = `form.chat-message-form
    .chat-message-form__container !{popper}
        | !{addFileButton}
    input.chat-message-form__field(placeholder="Сообщение" name="message" type="text")
    button.button.chat-message-form__send-button &rarr;`;
