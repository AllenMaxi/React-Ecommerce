export const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;
  
    if(!form.name.trim()){
      errors.name = "El campo 'Nombre' es requerido";
    } else if(!regexName.test(form.name.trim())){
       errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco"
    }
  
    if(!form.email.trim()){
      errors.email = "El campo 'Email' es requerido";
    }else if(!regexEmail.test(form.email.trim())){
      errors.email = "El campo 'Email' es incorrecto"
   }
  
    if(!form.confirmEmail.trim()){
      errors.confirmEmail = "El campo 'Confirm Emai' es requerido";
    }else if(!regexEmail.test(form.confirmEmail.trim())){
        errors.confirmEmail = "El campo 'Confirm Email' es incorrecto"
     } else if(form.email !== form.confirmEmail){
        errors.confirmEmail = "El campo 'Email' no coincide"
     }
  
    if(!form.comments.trim()){
      errors.comments = "El campo 'Commentarios' es requerido";
    }else if(!regexComments.test(form.comments.trim())){
       errors.comments = "El campo 'Comments' tiene un limite de 255 caracteres";
    }
  
  return errors;
  }