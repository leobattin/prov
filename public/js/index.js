/**
 * @todo Create firebase realtime database accessor module
 */

import { FirebaseModule } from './class/Firebase.mjs';
import { AuthenticationModule } from './class/Authentication.mjs'
import { RouterModule } from './class/Router.mjs'

let firebase = new FirebaseModule();
let auth = new AuthenticationModule();
let router = new RouterModule();

let about = document.getElementById('about');
about.addEventListener('click', () => {
    router.loadRoute('about');
});
