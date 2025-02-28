import css from "./Contact.module.css"
import { FaPhoneAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
export default function Contact({ id, name, number, onDelete }) {
    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <>
            <li key={id} className={css.il}>
                <div>
                    <p><IoPersonSharp />{name}</p>
                    <p><FaPhoneAlt />{number}</p>
                </div>
                <button className={css.b} onClick={handleDelete}>Delete</button>
            </li>
        </>
    );
}