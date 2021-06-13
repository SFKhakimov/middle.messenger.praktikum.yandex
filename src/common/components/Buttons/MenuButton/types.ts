import { MyEvents } from '../../../types/Event'
import Block from "../../Block"

export type Props = {
  buttonIcon: Block<Record<string, unknown>>
  events?: MyEvents
};
