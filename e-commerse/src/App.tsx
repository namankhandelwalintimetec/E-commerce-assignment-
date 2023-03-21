import "./App.css";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./Screens/LogIn";
import { auth, db } from "../src/Services/Firebase/Firebaseconfiguration";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { AddProducts } from "./Screens/Addproduct";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  // const [user, setUser] = useState({ user: null });
  // useEffect(() => {
  //   auth.onAuthStateChanged((user: any) => {
  //     if (user) {
  //       getDoc(doc(collection(db, "SignedUpUsersData"), user.uid)).then(
  //         (snapshot: any) => {
  //           setUser({
  //             user: snapshot.data().Name,
  //           });
  //         }
  //       );
  //     } else {
  //       setUser({
  //         user: null,
  //       });
  //     }
  //   });
  // }, []);
  // const [items, loading, error] = useCollectionData(collection(db, "item"));

  return (
    <BrowserRouter>
    <GlobalStyle/>
      <Authentication />
      <AddProducts/>

      <Routes>
        <Route path="/home" element={<div>hii</div>} />
        <Route path="/about" element={<div>hii</div>} />
        <Route path="/skills" element={<div>hii</div>} />
        <Route path="/contact" element={<div>hii</div>} />
        <Route path="/services" element={<div>hii</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
