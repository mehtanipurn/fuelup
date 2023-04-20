import React, { useEffect, useState } from "react";
import { doc, getDocs, collection } from "firebase/firestore";
import auth from "../../firebaseConfig";
import { db } from '../../firebaseConfig';

const Admin = () => {
  const [uid, setUid] = useState("")
  const [dataArray, setDataArray] = useState([]);
  const [newObject, setNewObject] = useState({
    billTotal: "",
    entityName: "",
    location: "",
    orderDateTime: "",
    quantity: ""
  })

  const [data, setData] = useState([]);

  const user = auth.currentUser;

  useEffect(() => {
    if(user){
      setUid(user.uid)
    }
  },[user])

  const fetchData = async() =>{
    const newCollectionRef = collection(db, 'orders', uid, 'newOrder')
    const querySnapshot = await getDocs(newCollectionRef);
    const newData = [];
    querySnapshot.forEach((doc) => {
      const {billTotal, entityName, location, orderDateTime, quantity} = doc.data();
      newData.push({
        id: doc.id,
        billTotal,
        entityName,
        location,
        orderDateTime,
        quantity
      });
    });
    setData(newData);
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-2">Fuel Orders</h2>
          <a href="#"><p className="text-gray-700 text-sm mb-2" onClick={fetchData}>View</p></a>
          <ul>
            {data.map((item) => (
              <>
              <li key={item.id}>
                {item.entityName} - {item.quantity} lts.
              </li>
              
              Total Price: {item.billTotal}
              <br />
              </>
            ))}
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Admin;
