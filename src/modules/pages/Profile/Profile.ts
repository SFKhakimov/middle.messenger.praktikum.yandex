import Block from "../../../common/components/Block";
import ProfileNavigation from "../../components/Profile/ProfileNavigation";
import compile from "../../../common/utils/compile";

import { template } from './template'
import './styles.css'
import ProfileContainer from "../../components/Profile/ProfileContainer";

export default class Profile extends Block {
    constructor() {
        super({
            navigation: new ProfileNavigation({}),
            main: new ProfileContainer({})
        }, 'main', "#app");

    }

    render() {
        const { navigation, main } = this.props
        return compile(template, {
            navigation, main
        })
    }

}
