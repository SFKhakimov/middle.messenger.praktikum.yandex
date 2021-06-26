import Input from '../Input'
import {MyEvents} from "../../types/Event"
import {BaseButton} from "../Buttons/BaseButton";

export type Props = {
  formName: string
  title: string
  content: Input[]
  buttonText?: string
  isRenderLink?: boolean
  buttonLink?: BaseButton
  events?: MyEvents
};
