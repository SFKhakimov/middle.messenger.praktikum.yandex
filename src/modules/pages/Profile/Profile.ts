import Block from "../../../common/components/Block";
import {ProfileNavigation} from "../../components/Profile/ProfileNavigation";
import {ProfileContainer} from "../../components/Profile/ProfileContainer";

import compile from "../../../common/utils/compile";

import { template } from './template'
import './styles.css'
import {Props} from "./types";

export default class Profile extends Block<Props> {
    constructor() {
        super({
            navigation: new ProfileNavigation(),
            main: new ProfileContainer()
        }, 'main', "#app");

    }

    render() {
        const { navigation, main } = this.props
        return compile(template, {
            navigation, main
        })
    }

}
