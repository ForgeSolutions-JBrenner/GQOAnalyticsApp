import firebase from "firebase/app";
import "firebase/storage";
// get config from Firebase console
const firebaseConfig = {
	apiKey: "AIzaSyBMLFwmSG1L43v5sia62vjfxBAr4pg4AFQ",
	authDomain: "stryker-file-upload.firebaseapp.com",
	projectId: "stryker-file-upload",
	storageBucket: "stryker-file-upload.appspot.com",
	messagingSenderId: "802156142941",
	appId: "1:802156142941:web:ce7f7cd6288a49f0d648b4",
	measurementId: "G-Y56T5LX894"
};

firebase.apps && !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : "";

export const FirebaseStorage = firebase.storage();
export default firebase;