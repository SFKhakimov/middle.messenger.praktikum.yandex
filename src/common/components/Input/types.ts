import { MyEvents } from '../../types/Event'

export type Props = {
  labelName: string
  inputName: string
  placeholder?: string
  type?: string
  errorText?: string,
  isValid?: boolean,
  inputValue?: string,
  events?: MyEvents
};
