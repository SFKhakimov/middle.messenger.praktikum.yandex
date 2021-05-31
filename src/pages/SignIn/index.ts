import SignIn from "./SignIn";
import { renderDom } from "../../utils/renderDom";

const signIn = new SignIn()
renderDom('.main', signIn)
