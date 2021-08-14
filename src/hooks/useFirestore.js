import { useState, useEffect } from "react";
import {
  projectFirestore,
  projectStorage,
  timestamp,
} from "../firebase/config";

const useFirestore = (collection) => {
  //state for the docs
  const [docs, setDocs] = useState([]);
  //communicate with the docs
  useEffect(() => {
    //onSnapshot fires a call back function
    //snap object represents the snapshot of the database

    //stop getting the data using unsub
    const unsub = projectFirestore
      .collection(collection)
      //order the documents in the collection by createdAt in descind order so
      // newest on top
      .orderBy("createdAt", "desc")
      //on snapshot is an active listener  listening to changes in the database
      .onSnapshot((snap) => {
        //listening to real time data updates
        let documents = [];
        //cycle through the documents using snap obj
        snap.forEach((doc) => {
          //using the spread syntax
          documents.push({ ...doc.data(), id: doc.id });
        });
        //set the state
        setDocs(documents);
      });
    //ubsubscribe from the collection when we are not using it
    return () => unsub();
  }, [collection]);
  return { docs };
};
export default useFirestore;
