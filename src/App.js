import { useState } from "react";
import "./App.css";
import Form from "./components/Register/Form";

function App() {
  const [userList, setUserList] = useState("");

  const addLoginHandler = (username, password) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: username, pass: password }];
    });
  };
  return (
    <div>
      <Form onLogin={addLoginHandler} />
    </div>
  );
}

export default App;
