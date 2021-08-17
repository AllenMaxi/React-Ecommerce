import { useState, useContext } from "react";
import { helpHttp } from "../helpers/helpHttp";
import ItemCart from "context/CartContext";
import { getFirestore } from 'components/functions/firebaseService';
import firebase from "firebase/app";
import "firebase/firestore";

export const useForm = (initialForm, validationsForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [orderID, setOrderID] = useState(null);

  const { itemsCart, cleanList} = useContext(ItemCart);

  const order = {form, item: itemsCart, date: firebase.firestore.Timestamp.fromDate(new Date()) };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validationsForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validationsForm(form));

    if (Object.keys(errors).length === 0) {
      alert("Sending Form");
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
          cleanList();
          setTimeout(() => setResponse(false), 5000);
        });
    } else {
      return;
    }

    if( itemsCart.length > 0 && Object.keys(errors).length === 0) {
      const db = getFirestore();
      db.collection("order").add(order)
      .then(resp => {setOrderID(resp.id)
      })
      .catch(err => console.log(err));
       }
       setTimeout(() => setOrderID(null),5000)
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    setErrors,
    orderID,
    setResponse, 
    setLoading,
    setForm
  };
};