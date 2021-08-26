import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./ContactsListItem.module.css";
// import {
//   // getItems,
//   getVisibleContacts,
// } from "redux/contacts/contacts-selection";
// import contactsOperations from "redux/contacts/contactsOperations";

import { contactsSelection, contactsOperations } from "redux/contacts";
const ContactsListItem = () => {
  const visibleContacts = useSelector(contactsSelection.getVisibleContacts);

  const dispatch = useDispatch();

  // const items = useSelector(getItems);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const onDeleteButtonClick = (id) =>
    dispatch(contactsOperations.deleteContact(id));

  return (
    // items.length &&
    visibleContacts.map(({ id, name, number }) => (
      <li className={styles.listItem} key={id}>
        {name}:{number}
        <button
          className={styles.button}
          onClick={() => onDeleteButtonClick(id)}
        >
          Delete
        </button>
      </li>
    ))
  );
};

export default ContactsListItem;
