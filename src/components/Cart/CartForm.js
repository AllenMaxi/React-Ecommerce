import React, { useState, useContext } from 'react'
import ItemCart from 'context/CartContext';
import { SpinnerRoundFilled } from 'spinners-react';
import { getFirestore } from 'components/functions/firebaseService';
import firebase from "firebase/app";
import "firebase/firestore";
import "components/styles/formContact.css";
import { helpHttp } from 'helpers/helpHttp';

const initialForm = {
    name: "",
    phoneNumber: "",
    email: "",
    confirmationEmail: "",
}


const CartForm = () => {
    const {itemsCart} = useContext(ItemCart);
    const [buyer, setBuyer] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false)
    const [orderID, setOrderID] = useState(null);
    
    let styles = {
      fontWeight: "bold",
      color: "#dc3545"
    }

    const order = {buyer, item: itemsCart, date: firebase.firestore.Timestamp.fromDate(new Date()) };
    
    const handleChange = (e) => {
        setBuyer({
          ...buyer,
          [e.target.name]: e.target.value
        })
     }

     const handleSubmit = (e) => {
          e.preventDefault();
          let errors = {};  
          let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
          let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        
          if(!buyer.name.trim()){
            errors.name = "El campo 'Nombre' es requerido";
            setErrors(errors);

          } else if(!regexName.test(buyer.name.trim())){
             errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco"
             setErrors(errors);
     
          } else if(!buyer.email.trim()){
            errors.email = "El campo 'Email' es requerido";
            setErrors(errors);
     
          }else if(!regexEmail.test(buyer.email.trim())){
            errors.email = "El campo 'Email' es incorrecto"
            setErrors(errors);
 
         } else if(buyer.confirmationEmail !== buyer.email){
           errors.confirmationEmail = "El email de confirmacion es distinto"
           setErrors(errors);
  
         } else if(!regexEmail.test(buyer.email.trim())){
          errors.confirmationEmail = "El campo 'Confirmation E-mail' es incorrecto"
          setErrors(errors);
 
         }else if(buyer.phoneNumber === ""){
            errors.phoneNumber = "El campo 'Phone Number' es requerido";
            setErrors(errors);

          } else {
            setLoading(true)
            if( itemsCart.length > 0) {
              const db = getFirestore();
              db.collection("order").add(order)
              .then(resp => {setOrderID(resp.id)
                setLoading(false)
              })
              .catch(err => console.log(err));
               }
          }

          setTimeout(() => {
              setErrors({})
          }, 5000);
          if (Object.keys(errors).length === 0) {
            setLoading(true);
            alert("Enviando Formulario");
       helpHttp().post("https://formsubmit.co/ajax/maxiallende97@gmail.com", {
                body: buyer,
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
              })
              .then((res) => {
                setLoading(false);
          }) 
        }else {
            return;
          }
    }
     
    return (
        <div>
<form id="contact_form" onSubmit={handleSubmit}>

    <div className="name">
    {errors.name && <p style={styles}> {errors.name} </p>}
      <label htmlFor="name"></label>
      <input type="text"
      placeholder="Name" 
      value={buyer.name}
      name="name" 
      id="name_input" 
      onChange={handleChange}
      />
    </div>
    
    <div className="email">
    {errors.email && <p style={styles}> {errors.email} </p>}
      <label htmlFor="email"></label>
      <input type="email" 
      placeholder="My e-mail is" 
      value={buyer.email}
      name="email" 
      id="email_input" 
      onChange={handleChange}/>
    </div>
  
    <div className="telephone">
      <label htmlFor="name"></label>
      <input type="text" 
      value={buyer.confirmationEmail}
      placeholder="My confirmation e-mail is" 
      name="confirmationEmail" 
      id="telephone_input" 
      onChange={handleChange}/>
       {errors.confirmationEmail && <p style={styles}> {errors.confirmationEmail} </p>}
    </div>
    
    <div className="telephone">
      <label htmlFor="name"></label>
      <input type="text" 
      value={buyer.phoneNumber}
      placeholder="My number is" 
      name="phoneNumber" 
      id="telephone_input" 
      onChange={handleChange}/>
       {errors.phoneNumber && <p style={styles}> {errors.phoneNumber} </p>}
    </div>

    <div className="submit">
      <input type="submit" 
      value="Send Message" 
      id="form_button" />
    </div>
  </form>
  {loading && <SpinnerRoundFilled 
        size={58} 
        thickness={116} 
        speed={93} 
        color="rgba(57, 172, 105, 1)" /> }
  {orderID !== null && <h2>{buyer.name}: Tu orden de compra es: {orderID}</h2>}
  </div>
        
    )
}

export default CartForm
