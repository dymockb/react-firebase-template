import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  connectFirestoreEmulator,
  enableMultiTabIndexedDbPersistence
} from 'firebase/firestore'
import {
  getAuth,
  connectAuthEmulator
  // signInWithCredential,
  // EmailAuthProvider
} from 'firebase/auth'

// the values to initialize the firebase app can be found in your firebase project
const firebaseConfig = {
  apiKey: 'AIzaSyCmHGNXgpN0ULzo4qEqt_PvpbLIlQKfzFU',
  authDomain: 'myapp-fed88.firebaseapp.com',
  projectId: 'myapp-fed88',
  storageBucket: 'myapp-fed88.appspot.com',
  messagingSenderId: '214178784104',
  appId: '1:214178784104:web:5523b9413a77aa99b82cdd',
  measurementId: 'G-FZ0EYVFSB2'
}

const initFirebase = async () => {
  try {
    const app = initializeApp(firebaseConfig)
    const firestore = getFirestore(app)
    const auth = getAuth(app)

    if (process.env.NODE_ENV !== 'production') {
      connectAuthEmulator(auth, 'http://localhost:9099')
      connectFirestoreEmulator(firestore, 'localhost', 8080)
      enableMultiTabIndexedDbPersistence(firestore)
      /**
       * The following code logins the user automatically to speed up development.
       * For this to work you first need to create a user and then run the command
       * yarn emulator:export, then import the data when starting the emulator
       * yarn firebase emulators:start --only firestore,auth --import=firestore_mock_data
       */
      // signInWithCredential(
      //   auth,
      //   EmailAuthProvider.credential('john@doe.com', '123123')
      // )
    }
  } catch (err) {
    console.error(err)
    return err
  }
}

export default initFirebase
