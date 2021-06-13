export const template = `.chat-list-item
                            .chat-list-item__container
                                .chat-list-item__message-container
                                    .chat-list-item__image
                                    .chat-list-item__message-info
                                        p.chat-list-item__user-name !{name}
                                        p.chat-list-item__message !{message}
                                .chat-list-item__info-container
                                    p.chat-list-item__message-date !{date}
                                    .chat-list-item__count-container
                                        p.chat-list-item__count !{countMessage}`
