export class AuthenticationModule {
    constructor() {
        this._authStateListener();
        this.providers = {
            'github': new firebase.auth.GithubAuthProvider()
        };
    }

    _authStateListener() {
        firebase.auth().onAuthStateChanged(user => {
            this.user = user;
        });
    }

    signIn() {
        firebase
            .auth().signInWithPopup(this.providers.github)
            .then(result => {
                // var token = result.credentials.accessToken;
                // var user = result.user;
            })
            .catch(error => {
                // var errorCode = error.code;
                // var errorMessage = error.message;
                // var email = error.email;
                // var credential = error.credential;
            });
    }

    signOut() {
        firebase
            .auth().signOut()
            .then(() => {
                // sign-out successful
            })
            .catch(error => {
                // var errorCode = error.code;
                // var errorMessage = error.message;
            })
    }    
}
