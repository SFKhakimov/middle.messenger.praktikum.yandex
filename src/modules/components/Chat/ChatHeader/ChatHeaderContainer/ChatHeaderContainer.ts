import Block from '../../../../../common/components/Block';
import MenuButton from "../../../../../common/components/Buttons/MenuButton";
import compile from '../../../../../common/utils/compile';

import { template } from './template';
import './styles.css';

import Popper from "../../../../../common/components/Popper";
import PopperButton from "../../../../../common/components/Popper/PopperButton";
import AddUserIcon from "../../../../../common/components/Icons/AddUserIcon";
import DeleteUserIcon from "../../../../../common/components/Icons/DeleteUserIcon";


export default class ChatHeaderContainer extends Block {
  constructor(props) {
    super({
      ...props,
      menuButton: new MenuButton({
        events: {
          click: (e) => this.onClick(e)
        }
      }),
      popper: new Popper({
        buttons: [
            new PopperButton({
              name: 'Добавить пользователя',
              icon: new AddUserIcon(),
            }),
            new PopperButton({
              name: 'Удалить пользователя',
              icon: new DeleteUserIcon()
            })
        ]
      })
    });
  }

  onClick(e) {
    const { popper } = this.props
    popper.addPopper(e)
  }

  render() {
    const { menuButton, popper } = this.props;
    return compile(template, {
      menuButton,
      popper
    });
  }
}
