import './App.css';
import Router from './Router/Router';
import { LoginUser, LoginUserID } from './Context/Context';
import { useEffect, useState } from 'react';
import { auth, onAuthStateChanged, getDoc, doc, db } from './Firebase Config/Config'

function App() {
  const [data, setdata] = useState(LoginUser);
  const [ID, setID] = useState(LoginUserID);

  useEffect(() => {

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        setID(uid)
        // console.log("Current User---->", uid);

        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setdata(docSnap.data())

        } else {
          console.log("No such document!");
        }
      }

    });
  }, [])

  return (
    <div className="App">
      <LoginUser.Provider value={[data, setdata]}>
        <LoginUserID.Provider value={[ID, setID]}>
          <Router />
        </LoginUserID.Provider>
      </LoginUser.Provider>
    </div>
  );
}

export default App;
