import { Formik, Field, Form } from 'formik';
import {handleRegistration} from '../../API'


export const Registration = () => {

    return (
        <div>
            <button>x</button>
            <h2>Registration</h2>
            <p>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information</p>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: ''
                }}
                onSubmit={(values) => {

                    handleRegistration(values)
                }}>
                <Form>
                    <label>
                        Name
                        <Field type="text" name='name'/>
                    </label>
                    <label>
                        Email
                        <Field type="email" name='email'/>
                    </label>
                    <label>
                        Password
                        <Field type="password" name='password'/>
                    </label>
                    <button type='submit'>Sign Up</button>
                </Form>

            </Formik>
        </div>
    )
}