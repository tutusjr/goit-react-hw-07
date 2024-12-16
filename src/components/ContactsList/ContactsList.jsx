import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps"; 
import { selectFilteredContacts } from "../../redux/contactsSlice";
import styles from "./ContactsList.module.css";
import ContactItem from "../ContactItem/ContactItem";

export default function ContactsList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

 
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={styles.ContactsListContainer}>
      {filteredContacts?.map((contact) => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </ul>
  );
}
