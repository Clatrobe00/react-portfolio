const handleValidation = (formInfo) => {
    let valid = true;
    let errors = {}
    const fields = {...formInfo};
    fields.name = fields.name.replace(" ", "");

    // name validation

    if(!fields.name){
        valid = false;
        errors["name"] = "Cannot be empty";
     }

     if(fields.name.length > 30){
         valid = false;
         errors["name"] = "Name must be 30 characters or less"
     }

     // email validation

     if(!fields.email.includes("@")) {
         valid = false;
         errors["email"] = "Must enter a valid email address";
     }

     if(!fields.email){
        valid = false;
        errors["email"] = "Cannot be empty";
     }

     if(fields.email.length > 30){
        valid = false;
        errors["email"] = "Email must be 30 characters or less"
    }

    // message validation

    if(!fields.message){
        valid = false;
        errors["message"] = "Cannot be empty";
     }

     if(fields.message.length > 500){
        valid = false;
        errors["message"] = "Message must be 500 characters or less"
    }    
    return ({valid, errors})

}

export default handleValidation;