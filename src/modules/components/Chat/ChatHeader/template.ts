export const template = `.chat-active-user
                            .chat-active-user__container
                                .chat-active-user__image
                                p.chat-active-user__name Вадим
                            div.chat-active-user__edit-container
                            | !{popper}
                            | !{menuButton}
                            | !{addUserModal}
                            | !{removeUserModal}`;
