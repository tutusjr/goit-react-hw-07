import React from 'react'
import styles from "./ContactItem.module.css"
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contactsOps'

export default function ContactItem({contact}) {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteContact(contact.id))
  }
  return (
    <li className={styles.ContactItemContainer}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
        <button onClick={handleDelete}>delete</button>
    </li>
  )
}
