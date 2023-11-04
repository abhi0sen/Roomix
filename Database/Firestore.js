import firebase from 'firebase/compat/app';
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { collection, addDoc, doc, updateDoc, query, where, getDocs } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";
import AsyncStorage from '@react-native-async-storage/async-storage';


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

const db = getFirestore(app);
const storage = getStorage(app);

const setUserId = async(userId) => {
    await AsyncStorage.setItem("userId", userId)
}

const getUserId = async() => {
    const userId = await AsyncStorage.getItem("userId")
}

const Registration = async (username, password, mobile) => {

try {
    const docRef = await addDoc(collection(db, "users"), {
      username: `${username}`,
      password: `${password}`,
      mobile: `${mobile}`
    });
    console.log("Document written with ID: ", docRef.id);
    setUserId(docRef.id)
  } catch (e) {
    console.error("Error adding document: ", e);
  }

}

const Loggedin = async(username, password, navigation) => {
  
  const q = query(collection(db, "users"), where("username", "==", `${username}`), where("password", "==", `${password}`))
  
const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    setUserId(doc.id)
    console.log(doc.id, " => ", doc.data());
    navigation.navigate("Home")
    return true;
  });
  return false;

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
  try {
    console.log(Gender, Diet, ageGroup, OtherCriteria)
    const docRef = doc(db, "Rooms", "a6mWEwyzQjKDFnkA75uY");
    
    await updateDoc(docRef, {
      Preference: {
        Gender: `${Gender}`,
        Diet: `${Diet}`,
        AgeGroup: `${ageGroup}`,
        OtherCriteria: `${OtherCriteria}`
      }
    });
    console.log(Gender, Diet, ageGroup, OtherCriteria)
    // console.log("Document updated with ID: ", docRef.id);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
}

const ViewRooms = async () => {
  const querySnapshot = await getDocs(collection(db, "Rooms"));
  data = []
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    data.push({ id: doc.id, ...doc.data() })
  });
  return data
}

const toggleFvt = async (id, fvt) => {
  const FvtRef = doc(db, "Rooms", id);
  await updateDoc(FvtRef, {
    isFvt: fvt
  });
  console.log("updated Successfully")
}

export {Registration, RoomPost, db, storage, RoomPreferred, Loggedin, ViewRooms, toggleFvt};
