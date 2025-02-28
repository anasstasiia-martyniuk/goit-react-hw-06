import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from "./ContactForm.module.css"

export default function ContactForm({ onSubmit }) {
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
        const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number,
        };
        onSubmit(newContact);
        resetForm();
    };

    return (
        <div>
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