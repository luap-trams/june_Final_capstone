export function fValidate (){
    

    if (form.name.value == "")
    {
        alert ("Please enter your full name");
        form.name.focus();
        return false;
    }

    if (form.email.value == "")
    {
        alert ("Please enter your email");
        form.email.focus();
        return false;
    }
         if (form.phone.value == "" || isNaN (form.phone.value) || form.phone.value.length !==10)
    {
        alert ("Please enter a valid phone number");
        form.phone.focus();
        return false;
    }
     if (form.message.value == "")
    {
        alert ("Please enter your message");
        form.message.focus();
        return false;
    }

    return true;
}