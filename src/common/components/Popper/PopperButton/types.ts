import { MyEvents } from '../../../types/Event';
import Block from "../../Block";

export type Props = {
  icon: Block<{}>
  name: string
  events?: MyEvents
};
