import Popper from '../../../../common/components/Popper';
import { MyEvents } from '../../../../common/types/Event';
import {AddFileButton} from "../../../../common/components/Buttons/AddFileButton/AddFileButton";

export type Props = {
  addFileButton: AddFileButton
  popper: Popper
  events?: MyEvents
};
