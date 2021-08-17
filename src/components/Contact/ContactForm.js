import React from 'react';
import "./Contact.css";
import { validationsForm } from './validationForm';
import { useForm } from 'hooks/useForm';
import Loader from 'components/Loader/Loader';
import Message from 'components/Message/Message';
import { helpHttp } from 'helpers/helpHttp'; 

const initialForm = {
   name: "",
   email: "",
   phone: "",
   message: "",
 };

const ContactForm = () => {
   const {
      form,
      loading,
      response,
      errors,
      handleChange,
      handleBlur,
      setErrors,
      setLoading,
      setResponse,
      setForm
    } = useForm(initialForm, validationsForm);

    let styles = {
      fontWeight: "bold",
      color: "#dc3545"
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setErrors(validationsForm(form));
  
      if (Object.keys(errors).length === 0) {
        alert("Enviando Formulario");
        setLoading(true);
        helpHttp()
          .post("https://formsubmit.co/ajax/maxiallende97@gmail.com", {
            body: form,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          })
          .then((res) => {
            setLoading(false);
            setResponse(true);
            setForm(initialForm);
            setTimeout(() => setResponse(false), 5000);
          });
      } else {
        return;
      }
    }
    return (
      <div className="get-in-touch">
      <h1 className="title">Get in <span>touch</span></h1>
   <form className="contact-form row" onSubmit={handleSubmit}>
      <div className="form-field col-lg-6">
         <input 
         id="name"
         name="name"
         className="input-text js-input" 
         type="text" 
         onBlur={handleBlur}
         onChange={handleChange}
         value={form.name}
         required />
         <label className="label" htmlFor="name">Name</label>
         {errors.name && <p style={styles}>{errors.name}</p>}
      </div>
      <div className="form-field col-lg-6 ">
         <input
          id="email" 
          name="email"
          className="input-text js-input" 
          type="email" 
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required />
         <label className="label" htmlFor="email">E-mail</label>
         {errors.email && <p style={styles}>{errors.email}</p>}
      </div>
       <div className="form-field col-lg-6 ">
         <input 
         id="phone" 
         name="phone"
         className="input-text js-input" 
         type="number" 
         onBlur={handleBlur}
         onChange={handleChange}
         value={form.phone}
         required />
         <label className="label" htmlFor="phone">Contact Number</label>
         {errors.phone && <p style={styles}>{errors.phone}</p>}
      </div>
      <div className="form-field col-lg-12">
         <input
          id="message" 
          name="message"
          className="input-text js-input" 
          type="text" 
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.message}
          required />
         <label className="label" htmlFor="message">Message</label>
         {errors.message && <p style={styles}>{errors.message}</p>}
      </div>
      <div className="form-field col-lg-12">
         <input 
         className="btn" 
         type="submit" 
         value="Submit" 
         />  
      </div>
   </form>
   {loading && <Loader />}
      {response && <Message 
      msg="El formulario se ha enviado correctamente"
      bgColor="#198754"/>}
        </div>
    )
}

export default ContactForm
