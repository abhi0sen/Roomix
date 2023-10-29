import firebase from 'firebase/compat/app';
import { getDatabase} from 'firebase/database'
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore, getDoc} from "firebase/firestore";
import { collection, addDoc, doc, setDoc, updateDoc } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";


const config = {
    apiKey: "AIzaSyB9Llq9DEtmFiBazb1Di1E-xSu2II7yuzA",
    authDomain: "roomix-1a2a1.firebaseapp.com",
    databaseURL: "https://roomix-1a2a1-default-rtdb.firebaseio.com",
    projectId: "roomix-1a2a1",
    storageBucket: "roomix-1a2a1.appspot.com",
    messagingSenderId: "802390159514",
    appId: "1:802390159514:web:e6e0c3305e50f5938eef23",
    measurementId: "G-L9T02NRH3R"
}


const app = initializeApp(config);

const db = getFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});
const storage = getStorage(app);

const Registration = async (username, password, mobile) => {

  db.collection("Rooms").doc(user).collection("Rooms").doc(user).update({
    firstName: "firstName",
  });

}

const RoomPost = async (FlatSize, RoommateCount, TotalRent, AddressL1, SelectedState, SelectedCity, Description, ImageUrls) => {
  try {
    const docRef = await addDoc(collection(db, "Rooms"), {
      FlatSize: `${FlatSize}`,
      RoommateCount: `${RoommateCount}`,
      TotalRent: `${TotalRent}`,
      AddressL1: `${AddressL1}`,
      SelectedState: `${SelectedState}`,
      SelectedCity: `${SelectedCity}`,
      Description: `${Description}`,
      ImageUrls: `${ImageUrls}`,
    });
    console.log("Document written with ID: ", docRef.id);
    // return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const RoomPreferred = async (Gender, Diet, ageGroup, OtherCriteria) => {
  const collectionRef = collection(db, "Rooms");
const docRef = doc(collectionRef, "a6mWEwyzQjKDFnkA75uY");

if (!(await getDoc(docRef)).exists()) {
  // Create the document with initial fields
  await setDoc(docRef, { field1: "value1", field2: "value2" });
}

try {
  await updateDoc(docRef, {
    newField1: "newValue1",
    newField2: "newValue2",
    // Add as many fields as needed
  });
  console.log("Document updated successfully");
} catch (error) {
  console.error("Error updating document: ", error);
}
}

export {Registration, RoomPost, storage, RoomPreferred};
