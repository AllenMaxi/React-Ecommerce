import React from 'react'
import { useForm } from '../../hooks/useForm'
import Loader from '../Loader/Loader';
import Message from "../Message/Message";
import { validationsForm } from './validationForm';
import "./CartForm.css";

const initialForm = {
    name: "",
    email: "",
    confirmEmail: "",
    comments: "",
  };

const CartForm = () => {
    const {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
        orderID
      } = useForm(initialForm, validationsForm);

      let styles = {
        fontWeight: "bold",
        color: "#dc3545"
      }

    return (
        <div>
            <h2>Formulario de contacto</h2>
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
    {errors.name && <p style={styles}>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
  {errors.email && <p style={styles}>{errors.email}</p>}
        <input
          type="text"
          name="confirmEmail"
          placeholder="Confirm Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.confirmEmail}
          required
        />
  {errors.confirmEmail && <p style={styles}>{errors.confirmEmail}</p>}
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tus comentarios"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
        ></textarea>
  {errors.comments && <p style={styles}>{errors.comments}</p>}
        <input type="submit" value="Enviar" />
      </form>
      {loading && <Loader />}
      {response && <Message 
      msg="The form has been submitted successfully"
      bgColor="#198754"/>}
      {orderID !== null && <Message msg={`Thanks, your purchase id is ${orderID}`} bgColor="#198754"/>}
        </div>
    )
}

export default CartForm
