// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBweazn0X0XnrS0BibuKZM8NG6l5T7LQ_4',
  authDomain: 'autoeducate-4117b.firebaseapp.com',
  databaseURL: 'https://autoeducate-4117b-default-rtdb.firebaseio.com',
  projectId: 'autoeducate-4117b',
  storageBucket: 'autoeducate-4117b.appspot.com',
  messagingSenderId: '478519189731',
  appId: '1:478519189731:web:f99cc65a8a0d635402a5d6',
  measurementId: 'G-LYX99BXG31'
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const firestore = getFirestore(app)
