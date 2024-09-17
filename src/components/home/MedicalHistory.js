// src/components/MedicalHistory.js
import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firestore = getFirestore();

const MedicalHistory = () => {
    const auth = getAuth();
  const [history, setHistory] = useState([]);
  const userId = auth.currentUser.uid; // Replace with actual user ID

//   useEffect(() => {
//     const fetchHistory = async () => {
//       const docRef = doc(firestore, `users/${userId}`, 'medicalHistory');
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         setHistory(docSnap.data().records);
//       } else {
//         console.log('No such document!');
//       }
//     };

//     fetchHistory();
//   }, [userId]);

  return (
    <div>
      <h2>Medical History</h2>
      <ul>
        {/* {history?.map((record, index) => (
          <li key={index}>{record}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default MedicalHistory;
