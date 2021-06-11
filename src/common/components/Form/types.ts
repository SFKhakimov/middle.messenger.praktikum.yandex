import Input from '../Input';
import {MyEvents} from "../../types/Event";

export type Props = {
  formName: string
  title: string
  content: Input[]
  buttonText?: string
  isRenderLink?: boolean
  linkTitle?: string
  href?: string
  events?: MyEvents
};
