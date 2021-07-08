export const template = `.select
                            | !{input}
                            ul.select__container
                                if options
                                    each opt in options
                                      li.select__option(class=opt.isChecked ? 'select__option_active' : '')
                                        label(for=opt.value class="select__label") !{opt.label}
                                          input(type="checkbox" name=opt.label id=opt.value value=opt.value class="select__checkbox" checked=opt.isChecked)`
