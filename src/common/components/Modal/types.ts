import { MyEvents } from '../../types/Event'

export type Props<T> = {
  content: T
  events?: MyEvents
};
