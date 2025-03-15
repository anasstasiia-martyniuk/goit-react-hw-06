import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filters = useSelector((state) => state.filters.name);

  const filteredData = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );
  console.log(contacts);

  return (
    <ul className={css.list}>
      {filteredData.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact data={contact} />
          </li>
        );
      })}
    </ul>
  );
}