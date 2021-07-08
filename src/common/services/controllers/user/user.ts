import authApi from '../../api/auth'
import userApi from '../../api/user'
import store from "../../store"
import {Router} from "../../../components/Router";
import {Path} from "../../../constants/router";
import {SearchUser} from "../../api/user/types";

export default class UserController {

    route: Router

    constructor() {
        this.route = new Router()
    }


    signUp(data) {
        authApi.signUp(data).then(res => res).catch(err => console.log(err))
    }


    signIn(data) {
        authApi.signIn(data).then(res => {
            this.route.go(Path.Chat)
        }).catch(err => console.log(err))
    }


    getUser() {
        authApi.getUser().then(res => {
            store.dispatch('setUser', res)
        }).catch(err => {
            if (err.status === 401) {
                this.route.go(Path.SignIn)
            }
        })
    }


    getUsers(params: SearchUser) {
        userApi.getUsers(params).then(res => {
            store.dispatch('setUsers', res)
        }).catch(err => console.log(err))
    }
}
