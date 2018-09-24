/** @format */
import * as firebase from 'firebase'
import { AppRegistry } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCcqjfot2mopAg1tcpDlUacjviAAibbJsQ',
  authDomain: 'hecaton-f0287.firebaseapp.com',
  databaseURL: 'https://hecaton-f0287.firebaseio.com',
  projectId: 'hecaton-f0287',
  storageBucket: 'hecaton-f0287.appspot.com',
  messagingSenderId: '745827928392'
}
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

AppRegistry.registerComponent(appName, () => App)

const db = firebase.database()

export { db }
