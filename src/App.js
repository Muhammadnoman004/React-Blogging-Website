import './App.css';
import Router from './Router/Router';
import LoginUser from './Context/Context';
import { useEffect, useState } from 'react';
import { auth, onAuthStateChanged, getDoc, doc, db } from './Firebase Config/Config'

function App() {
  const [data, setdata] = useState(LoginUser);

  useEffect(() => {

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        console.log("Current User---->", uid);

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
        <Router />
      </LoginUser.Provider>
    </div>
  );
}

export default App;
