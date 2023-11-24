import "./App.css";
import {
  collection,
  getDocs,
  query,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";
import { useEffect, useState } from "react";

const App = () => {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    let f = () => {
      const q = query(collection(db, "posts"));
      onSnapshot(q, (querySnapshot) => {
        let tempArr = [];
        querySnapshot.forEach((doc) => {
          tempArr.push({ id: doc.id, data: doc.data() });
        });
        setPosts(tempArr);
      });
    };
    f();
  }, []);

  return (
    <div>
      <div>
        <ul>
          {posts.map((el) => {
            return <li key={el.id}>{el.data.body}</li>;
          })}
        </ul>
        <input
          type="text"
          onKeyDown={async (e) => {
            if (e.code === "Enter") {
              let post = e.target.value;
              e.target.value = "";
              await addDoc(collection(db, "posts"), {
                body: post,
              });
            }
          }}
        />
      </div>
    </div>
  );
};

export default App;
