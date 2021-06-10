import MenuButton from '../../../../common/components/Buttons/MenuButton';
import Popper from '../../../../common/components/Popper';
import Modal from '../../../../common/components/Modal';
import Form from '../../../../common/components/Form/Form';

export type Props = {
  menuButton: MenuButton
  popper: Popper
  addUserModal: Modal<Form>
  removeUserModal: Modal<Form>
};
