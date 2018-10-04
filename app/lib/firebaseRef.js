import firebase from 'firebase'

const firebaseConfig = {
  apiKey: '<YOUR_API_KEY>',
  authDomain: '<YOUR_AUTH_DOMAIN>',
  databaseURL: '<YOUR_DB_URL>'
}

firebase.initializeApp(firebaseConfig)
export const rootRef = firebase.database().ref()
