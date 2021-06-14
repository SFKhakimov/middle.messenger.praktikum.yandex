import { MyEvents } from '../../../types/Event'
import Block from "../../Block"

export type Props = {
  icon: Block<Record<string, unknown>>
  name: string
  events?: MyEvents
};
