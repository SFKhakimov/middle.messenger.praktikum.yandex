import PopperButton from './PopperButton';
import { MyEvents } from '../../types/Event';

export type Props = {
  x?: number,
  y?: number,
  events?: MyEvents
  buttons: PopperButton[]
};
