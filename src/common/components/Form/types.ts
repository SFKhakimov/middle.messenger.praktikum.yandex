import Input from '../Input';

export type Props = {
  formName: string
  title: string
  content: Input[]
  buttonText: string
  isRenderLink?: boolean
  linkTitle?: string
  href?: string
};
