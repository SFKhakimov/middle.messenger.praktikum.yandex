import SignIn from "./SignIn";
import {FormSignIn} from "../../components/Form";
import {renderDom} from "../../utils/renderDom";

const signIn = new SignIn()
const form = new FormSignIn()

renderDom('.main', form)
// const formData = new FormData(document.querySelector('.form'))
// console.log(formData.get('login'))
// document.querySelector('.main').insertAdjacentElement('beforeend', signIn.element)
