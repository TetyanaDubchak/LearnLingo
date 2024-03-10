import { Formik, Field, Form } from 'formik';
import {handleLogIn} from '../../API'


export const LogIn = () => {

    return (
        <div>
            <button>x</button>
            <h2>Log In</h2>
            <p>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</p>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={(values) => {
                    handleLogIn(values)
                }}>
                <Form>
                    <label>
                        Email
                        <Field type="email" name='email'/>
                    </label>
                    <label>
                        Password
                        <Field type="password" name='password'/>
                    </label>
                    <button type='submit'>Log In</button>
                </Form>
            </Formik>
        </div>
    )
}