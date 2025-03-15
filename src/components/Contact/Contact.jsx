import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

export default function Contact({ data }) {

  const dispatch = useDispatch();

  return (
    <div className={css.il}>
    <div>
        <p><IoPersonSharp />{data.name}</p>
        <p><FaPhoneAlt />{data.number}</p>
    </div>
    <button onClick={() => {dispatch(deleteContact(data.id)); }} className={css.deleteButton}> Delete </button>
</div>
  );
}