import React from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";


function App() {

const contacts=[
  {
    id:1,
    name:"Pavan",
    email:"pavan@mail.com"
  },
  {
    id:2,
    name:"kumar",
    email:"kumar@mail.com"
  },
];

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
