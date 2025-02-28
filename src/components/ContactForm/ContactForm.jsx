import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps'; // Оновлено імпорт
import css from "./ContactForm.module.css";

export default function ContactForm() {
    const dispatch = useDispatch();

    const initialValues = {
        name: '',
        number: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, 'Name must be at least 3 characters')
            .max(50, 'Name must be less than 50 characters')
            .required('Name is required'),
        number: Yup.string()
            .matches(/^[0-9-]+$/, 'Number must contain only digits')
            .min(3, 'Number must be at least 3 characters')
            .max(50, 'Number must be less than 50 characters')
            .required('Number is required'),
    });

    const handleSubmit = (values, { resetForm }) => {
        dispatch(addContact(values));
        resetForm();
    };

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
                        <label>Name</label>
                        <Field type="text" id="name" name="name" />
                        <ErrorMessage name="name" component="div" />
                    </div>
                    <div className={css.l}>
                        <label>Number</label>
                        <Field type="text" id="number" name="number" pattern="[0-9-]+" />
                        <ErrorMessage name="number" component="div" />
                    </div>
                    <button className={css.b} type="submit">Add Contact</button>
                </Form>
            </Formik>
        </div>
    );
}