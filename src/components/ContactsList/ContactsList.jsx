import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import styles from "./ContactsList.module.css";
import ContactItem from "../ContactItem/ContactItem";

export default function ContactsList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  console.log(filteredContacts);

  return (
    <ul className={styles.ContactsListContainer}>
      {filteredContacts?.map((contact) => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </ul>
  );
}
