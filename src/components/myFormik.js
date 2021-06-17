 import React from 'react';
 import { Text } from "./Text"
 import data from "../components/data"
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 import { useStore, useSelector } from 'react-redux'
 import { actionChangeEmail, actionChangeMessage, actionChangeFormSent } from '../state/actions'
 import sendEmail from '../utils/sendEmail'
 import * as scssVariables from './scssVariablesForJs.module.scss'
 

 const BasicFormik = () => {

    console.log('FORMIK KOMPONENT RENDERED');
    
    const store = useStore();
    const isFormSent = useSelector((state) => state.isFormSent);  

    const confirmFormSent = (isConfirmed) => {
        console.log('form has been sent ', isConfirmed);
        store.dispatch(actionChangeFormSent(true));
        // const dispatch = useDispatch(); both work, just saying...
    }

    const errorStyles = {color: scssVariables.scssOrange, fontSize : '12px', textAlign: 'center', padding: '1vh'};
    const confirmationStyles = {color: scssVariables.scssGreen, fontSize : '12px'};

    if (isFormSent) return (
      <>
        <Text tag = 'p' text = { data.textSection6_5 } styles = { confirmationStyles }/>        
      </>
    )
     
    return (
      
     <>
     
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
           const submissionJSON = JSON.stringify(values, null, 2);
           //alert(JSON.stringify(values, null, 2));   
           sendEmail(submissionJSON,  confirmFormSent);          
           setSubmitting(false);
         }, 400);
       }}
     >

       {({ isSubmitting }) => (
         <Form>
           <Field type="text" name="email" placeholder = 'komu odpisać?' onKeyUp = {(e) => store.dispatch(actionChangeEmail(e.target.value))}/>
           <ErrorMessage style = { errorStyles } name="email" component="div" />
           <Field type="textarea" name="message" placeholder = 'skrobnij coś' onKeyUp = {(e) => store.dispatch(actionChangeMessage(e.target.value))} />
           <ErrorMessage style = { errorStyles } name="message" component="div" />
           <button type="submit" disabled={ isSubmitting }> mejla ślij! </button>
         </Form>
       )}
     </Formik>

   </>
 )};

 export default BasicFormik;

 