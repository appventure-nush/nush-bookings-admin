import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  setDoc,
  increment,
} from 'firebase/firestore';

import { getAuth, signInWithPopup, OAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCzGf6_C5oxBu84nozg68tYD7mlwXbKUc4',
  authDomain: 'nush-open-house-tours.firebaseapp.com',
  projectId: 'nush-open-house-tours',
  storageBucket: 'nush-open-house-tours.appspot.com',
  messagingSenderId: '573610856751',
  appId: '1:573610856751:web:f9f0170d121f9716c3d1da',
  measurementId: 'G-DR3Y1SZP1L',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default {
  async microsoftLogin() {
    const provider = new OAuthProvider('microsoft.com');
    const auth = getAuth(app);
    try {
      const result = await signInWithPopup(auth, provider);
      return result;
    } catch (error) {
      return error;
    }
  },
  async getParticipants(tourGroup) {
    const bookingsRef = collection(db, `tourGroups/${tourGroup}/bookings`);
    const snapshot = await getDocs(bookingsRef);
    const names = [];
    snapshot.forEach((doc) => {
      names.push(doc.data().name);
    });
    return names;
  },
  async addParticipant(tourGroup, participantName, participantPax) {
    const timeslotsRef = doc(db, 'slotsLeft', 'slotsLeft');
    const timeslotsSnapshot = await getDoc(timeslotsRef);
    const paxLeft = timeslotsSnapshot.data()[tourGroup];
    if (paxLeft >= participantPax) {
      const bookingsRef = collection(db, `tourGroups/${tourGroup}/bookings`);
      const bookingData = {
        name: participantName,
        pax: participantPax,
      };
      const bookingRes = await addDoc(bookingsRef, bookingData);
      const timeslotsRes = await updateDoc(timeslotsRef, {
        [tourGroup]: paxLeft - participantPax,
      });
      return bookingRes && timeslotsRes;
    } else {
      throw 'No pax left';
    }
  },
};
