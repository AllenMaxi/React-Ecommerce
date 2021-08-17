export const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  
    if(!form.name.trim()){
      errors.name = "The 'Name' field is required";
    } else if(!regexName.test(form.name.trim())){
       errors.name = "The 'Name' field only accepts letters and blanks"
    }
  
    if(!form.email.trim()){
      errors.email = "The 'Email' field is required";
    }else if(!regexEmail.test(form.email.trim())){
      errors.email = "The 'Email' field is incorrect"
   }
  
    if(!form.phone.trim()){
      errors.phone = "The 'Contact Number' field is required";
    }
  
    if(!form.message.trim()){
      errors.message = "The 'Message' field is required";
    }
  
  return errors;
  }