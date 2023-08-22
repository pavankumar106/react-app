import React from "react";

const ContactList = (props) => {
  console.log(props);
  const renderContactList = props.contacts.map((contacts) => {
    return (
      <div className="item">
        <div className="content">
          <div className="header">{contacts.name}</div>
          <div>{contacts.email}</div>
        </div>
        <i className="trash alternate outline icon"></i>
      </div>
    );
  });
  return <div className="ui celled list">{renderContactList}</div>;
};
export default ContactList;
