import MenuButton from '../../../../common/components/Buttons/MenuButton'
import Popper from '../../../../common/components/Popper'
import Modal from '../../../../common/components/Modal'
import Form from '../../../../common/components/Form/Form'
import {User} from "../../../../common/services/api/auth/types";
import Store from "../../../../common/services/store/store";

export type Props = {
    user?: User
    menuButton: MenuButton
    popper: Popper
    addUserModal: Modal<Form>
    removeUserModal: Modal<Form>
    store: Store
};
