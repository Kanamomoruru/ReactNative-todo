import firebase from 'firebase'
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCRhXJ3Fd3dlicX3sHd74glFnqAXqs8yjA",
    authDomain: "rntodo-a7cb1.firebaseapp.com",
    databaseURL: "https://rntodo-a7cb1.firebaseio.com",
    projectId: "rntodo-a7cb1",
    storageBucket: "rntodo-a7cb1.appspot.com",
    messagingSenderId: "632111559799",
    appId: "1:632111559799:web:a56b0dea7ef9ddcb92c272"
}

class Fire {
    constructor(callback) {
        this.init(callback)
    }
    init(callback) {
        if(!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                callback(null, user)
            } else {
                firebase.auth().signInAnonymously().catch(error => {callback(error)});
            }
        })
    }

    getLists(callback) {
        let ref = firebase
            .firestore()
            .collection("users")
            .doc(this.userId)
            .collection("lists");

        this.unsubscribe = ref.onSnapshot(snapshot => {
            lists = [];
            
            snapshot.forEach(doc => {
                lists.push({id: doc.id, ...doc.data() });
            });

            callback(lists);
        });
    }

    get userId() {
        return firebase.auth().currentUser.uid;
    }

    detach() {
        this.unsubscribe()
    }
}

export default Fire;