import React, { useEffect } from "react";
import "./App.css";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen"

function App() {
  const user = useSelector(selectUser)
  console.log(user)
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        console.log(userAuth)
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
        }))
      }
      else{
        dispatch(logout())
      }
    })
    return unsubscribe
  
  }, [])

  return (
    <Router>
      {!user?(
        <Login/>
      ):<div className="app">
      <Routes>
        <Route exact   path="/" element={<Homescreen />} />
        <Route exact path="/profile" element={<ProfileScreen/>}/>
      </Routes>
    </div>}
      
    </Router>
  );
}

export default App;
