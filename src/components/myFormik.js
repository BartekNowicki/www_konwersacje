 import React from 'react';
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 import { useStore } from 'react-redux'
 import { actionChangeEmail, actionChangeMessage } from '../state/actions'
 import { sendEmail } from '../utils/sendEmail'
 

 const BasicFormik = () => {

    //both work, just saying...
    const store = useStore();
    // const dispatch = useDispatch();
     
    return (
     <div>
     <h1>Kontakt</h1>
     <Formik
       initialValues={{ email: '', message: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'wymagane';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'podaj poprawny email';
         }
         return errors;
       }}

       onSubmit={(values, { setSubmitting }) => {

        store.dispatch(actionChangeEmail(values.email));
        store.dispatch(actionChangeMessage(values.message));

         setTimeout(() => {
           const submission = JSON.stringify(values, null, 2);
           //  alert(JSON.stringify(values, null, 2));       
           sendEmail(submission);
           setSubmitting(false);
         }, 400);
       }}
     >

       {({ isSubmitting }) => (
         <Form>
           <Field type="text" name="email" placeholder = 'komu odpisać?' onKeyUp = {(e) => store.dispatch(actionChangeEmail(e.target.value))}/>
           <ErrorMessage name="email" component="div" />
           <Field type="text" name="message" placeholder = 'skrobnij coś' onKeyUp = {(e) => store.dispatch(actionChangeMessage(e.target.value))} />
           <ErrorMessage name="message" component="div" />
           <button type="submit" disabled={isSubmitting}> mejla ślij! </button>
         </Form>
       )}
     </Formik>
   </div>
 )};

 export default BasicFormik;

 