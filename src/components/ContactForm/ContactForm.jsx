import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from 'react-redux';
import { addContact } from "../../redux/contactsSlice";
import css from "./ContactForm.module.css";

export default function ContactForm() {
    const dispatch = useDispatch();

    const initialValues = {
        name: '',
        number: '',
    };

    const validationSchema = Yup.object({
      name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        "Phone number must be in the format 000-00-00"
      )
      .required("Required"),
    });

    const handleSubmit = (values, actions) => {
      console.log(values);
      dispatch(
        addContact({ id: nanoid(), name: values.name, number: values.number })
      );
      actions.resetForm();
    };
    
  const nameId = useId();
  const numberId = useId();

    return (
        <div>
            <h1 className={css.p}>Phonebook</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className={css.q}>
                    <div className={css.l}> 
                        <label htmlFor={nameId}>Name</label>
                        <Field type="text"  id={nameId} name="name" />
                        <ErrorMessage name="name" component="div" />
                    </div>
                    <div className={css.l}>
                        <label htmlFor={numberId}>Number</label>
                        <Field type="text" id={numberId} name="number" />
                        <ErrorMessage name="number" component="div" />
                    </div>
                    <button className={css.b} type="submit">Add Contact</button>
                </Form>
            </Formik>
        </div>
    );
}