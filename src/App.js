import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./Components/FireBaseConfig/firebase.config";
export const ContextForUser = createContext([]);
export const ContextForTransport = createContext([]);

firebase.initializeApp(firebaseConfig);

function App() {

  const defaultUser  = {
    name:"not set" ,
    email: "not set" ,
    photo: "not set" ,
    isLoggedInOrNot : false
  }
  const defaultTransport = {
    name:"not set" ,
    photo: "not set" 
  }
  const [user , setUser] = useState(defaultUser);
  const [transport , setTransport] = useState(defaultTransport);
  return (
    <ContextForUser.Provider value={[user , setUser]}>
      <ContextForTransport.Provider value={[transport , setTransport]}>
        <Header></Header>
      </ContextForTransport.Provider>
    </ContextForUser.Provider>
  );
}

export default App;
