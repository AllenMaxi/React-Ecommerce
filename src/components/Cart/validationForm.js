export const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;
  
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
  
    if(!form.confirmEmail.trim()){
      errors.confirmEmail = "The 'Confirm Emai' field is required";
    }else if(!regexEmail.test(form.confirmEmail.trim())){
        errors.confirmEmail = "The 'Confirm Email' field is incorrect";
     } else if(form.email !== form.confirmEmail){
        errors.confirmEmail = "The 'Email' field do not match";
     }
  
    if(!form.comments.trim()){
      errors.comments = "The 'Comments' field is required";
    }else if(!regexComments.test(form.comments.trim())){
       errors.comments = "The 'Comments' field has a 250 words limit";
    }
  
  return errors;
  }