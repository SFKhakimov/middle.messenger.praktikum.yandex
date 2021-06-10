import AddUserIcon from '../../Icons/AddUserIcon';
import DeleteUserIcon from '../../Icons/DeleteUserIcon';
import { MyEvents } from '../../../types/Event';
import AddPhotoIcon from '../../Icons/AddPhotoIcon';
import AddMessageFileIcon from '../../Icons/AddMessageFileIcon';
import AddLocation from '../../Icons/AddLocation';

export type Props = {
  icon: AddUserIcon | DeleteUserIcon | AddPhotoIcon | AddMessageFileIcon | AddLocation
  name: string
  events?: MyEvents
};
