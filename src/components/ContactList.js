import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contacts) => {
    return (
      <ContactCard contacts={contacts} clickHandler={deleteContactHandler} key={contacts.id}/>
    );
  });
  return <div className="ui celled list">{renderContactList}</div>;
};
export default ContactList;
