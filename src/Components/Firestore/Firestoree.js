import React, { useState, useEffect } from 'react';
import { db } from '../../firebaseConfig';
import { doc, setDoc } from "firebase/firestore"; 
import auth from '../../firebaseConfig';
function Firestoree() {
    const [username, setUsername] = useState("")
    const user = auth.currentUser;
    useEffect(() => {
        if(user!= null){
            setUsername(user.displayName)
        }
        else{
            console.log("user is null");
        }
    }, [])
    
    console.log(auth.currentUser);
    const sett = async() => {
        await setDoc(doc(db, "orders",username), {
            name: "Los Angeles",
            state: "CA",
            country: "USA"
          });
    } 
    sett();
  return (
    <div>
      This is firestore databse
    </div>
  );
}

export default Firestoree;
