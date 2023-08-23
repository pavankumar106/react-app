import React from "react";
import ContactCard from "./ContactCard";
const ContactList = (props) => {
  console.log(props);
  const renderContactList = props.contacts.map((contacts) => {
    return <ContactCard contacts={contacts} />;
  });
  return <div className="ui celled list">{renderContactList}</div>;
};
export default ContactCard;
