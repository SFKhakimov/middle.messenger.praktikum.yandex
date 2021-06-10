import { ProfileImage } from '../ProfileImage';
import { ProfileInfoFieldContainer } from '../ProfileInfoFieldContainer';
import Modal from '../../../../common/components/Modal';
import { ProfileInfoField } from '../ProfileInfoField';
import { ProfileInfoButtonField } from '../ProfileInfoButtonField';
import { ProfileInfoEditButton } from '../ProfileInfoEditButton';
import { ProfileImageEditModal } from '../ProfileImageEditModal';

export type Props = {
  name: string
  image: ProfileImage
  infoFields: ProfileInfoFieldContainer<ProfileInfoField[]>
  buttons: ProfileInfoFieldContainer<ProfileInfoButtonField<ProfileInfoEditButton>[]>
  editProfileImageModal: Modal<ProfileImageEditModal>
  editProfileModal: Modal<ProfileImageEditModal>
  editPasswordModal: Modal<ProfileImageEditModal>
};
