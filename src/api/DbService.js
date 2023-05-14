import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  increment,
  serverTimestamp,
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
    provider.setCustomParameters({
      prompt: 'consent',
      tenant: 'organizations',
    });
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
    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name,
        pax: data.pax,
      };
    });
  },
  async addParticipant(tourGroup, participantName, participantPax) {
    const bookingsRef = collection(db, `tourGroups/${tourGroup}/bookings`);
    const bookingData = {
      name: participantName,
      pax: participantPax,
      timestamp: serverTimestamp(),
    };
    const bookingDoc = await addDoc(bookingsRef, bookingData);
    await updateDoc(doc(db, 'slotsLeft/slotsLeft'), {
      [tourGroup]: increment(-participantPax),
    });
    return bookingDoc.id;
  },
  async cancelBooking(tourGroup, bookingId, pax) {
    await deleteDoc(doc(db, `tourGroups/${tourGroup}/bookings/${bookingId}`));
    await updateDoc(doc(db, 'slotsLeft/slotsLeft'), { [tourGroup]: increment(pax) });
  },
};
