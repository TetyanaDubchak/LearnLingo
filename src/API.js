import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { getDatabase, ref, get } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCE4tj95wUXbVIlgSSBBlYt1z8SPGVGQ1Y",
  authDomain: "learnlingo-96756.firebaseapp.com",
  databaseURL: "https://learnlingo-96756-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "learnlingo-96756",
  storageBucket: "learnlingo-96756.appspot.com",
  messagingSenderId: "316232366791",
  appId: "1:316232366791:web:fd1a298b0573cacb079ce2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export const handleRegistration = async ({name,email,password}) => {
    try {
        const createUser = await createUserWithEmailAndPassword(auth, email, password);
        const user = createUser.user;

        const userDocRef = doc(db, 'users', user.uid);
        await setDoc(userDocRef, { name: name, email: email });
        console.log('Successfully', user);
    } catch (error) {
        console.error('Failed', error.message);
    }
}

export const handleLogIn = async(values) => {
    const { email, password } = values;
    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('User logged in successfully');
    } catch (error) {
        console.error('Login failed:', error.message);
    }

}

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('User is signed in:', user.uid);
    // Відобразіть зміст для автентифікованого користувача
  } else {
    console.log('No user is signed in.');
    // Відобразіть зміст для неавтентифікованого користувача
  }
})

export const getTeachersList = async () => {
    const getRef = ref(database);
    const getList = await get(getRef);

    if (getList.exists()) {
        return getList.val();
    } else {
        console.log('No data');
    }
    
}