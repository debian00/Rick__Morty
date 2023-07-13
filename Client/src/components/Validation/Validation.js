const validation =(userData) =>{

    const errors = {};
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email))
        {
            errors.email = "*Email inválido."
        }
        if(!userData.email){
            errors.email = "*No ha ingresado un email"
        }
        if(userData.email.length > 35){
            errors.email = "*Ha excedido el número de caracteres(35)"
        }

            if(!/.*\D+.*/.test(userData.password)){
                errors.password = "*Debe incluir al menos un número."
            }
            if(userData.password.length >6 && userData.password.length > 10 )
{
    errors.password = "*El password debe tener entre  6 y 10 caracteres."
}



return errors;
}

export default validation;