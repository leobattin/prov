export class FirebaseModule {
    constructor() {
        this.config = {
            apiKey: "AIzaSyARggXWgLS44gb6SJDNlYevHhWBVfDe4B0",
            authDomain: "leobattin.firebaseapp.com",
            databaseURL: "https://leobattin.firebaseio.com",
            projectId: "leobattin",
            storageBucket: "leobattin.appspot.com",
            messagingSenderId: "493247334273",
            appId: "1:493247334273:web:d0ec6e5b8847767bdc4a80"
          };
        this._init();
    }

    _init() {
        firebase.initializeApp(this.config);
    }
}
