import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./ContactsListItem.module.css";
import contactsActions from "redux/contacts/contacts-actions";
import {
  // getContactsReducer,
  // getFilterReducer,
  getItems,
  getVisibleContacts,
} from "redux/contacts/contacts-selection";
import contactsOperations from "redux/contacts/contactsOperations";

// import { contactsActions, contactsOperations } from "redux/contacts";

const ContactsListItem = () => {
  // const contacts = useSelector((state) => {
  //   const contactsReducer = getContactsReducer(state);
  //   const filterReducer = getFilterReducer(state);
  //   const visibleContacts = contactsReducer.filter((contact) =>
  //     contact.name.toLowerCase().includes(filterReducer.toLowerCase())
  //   );
  //   return visibleContacts;
  // });
  const visibleContacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();

  const items = useSelector(getItems);

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
