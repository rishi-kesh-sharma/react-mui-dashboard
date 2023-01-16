import React, { useEffect } from "react";
import ContactsTable from "./tables/ContactsTable";
import { useDispatch } from "react-redux";
import { SET_CONTACTS } from "./../actions/contactAction";
import { getAllContacts } from "./../apiCalls/contacts";

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getContactsInfo = async () => {
      const contactsInfo = await getAllContacts();
      dispatch({ type: SET_CONTACTS, payload: contactsInfo });
    };
    getContactsInfo();
  }, []);
  return (
    <div>
      <ContactsTable />
    </div>
  );
};

export default Contacts;
