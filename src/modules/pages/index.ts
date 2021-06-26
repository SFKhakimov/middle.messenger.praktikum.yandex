import Router from "../../common/components/Router/Router";
import {SignIn} from "./SignIn";
import { SignUp} from "./SignUp";
import { Profile} from "./Profile";
import { Chat} from "./Chat";
import {Path} from "../../common/constants/router";
import {Error404} from "./Errors/404";
import {Error500} from "./Errors/500";


const router = new Router('#app')

router
    .use(Path.Chat, Chat)
    .use(Path.SignIn, SignIn)
    .use(Path.SignUp, SignUp)
    .use(Path.Profile, Profile)
    .use(Path.Error404, Error404)
    .use(Path.Error500, Error500)
    .start()
