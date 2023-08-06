var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Please provide name';
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Please write full name';
        return false;

    }
    nameError.innerHTML ='valid'
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
     if (phone.length == 0) {
        phoneError.innerHTML='Please provide phone number ';
        return false;
     }

     if (phone.length !==10){
        phoneError.innerHTML= "Invalid Phone Number";
        return false;
     }

     if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML="Enter a valid phone number ";
     }

    phoneError.innerHTML = 'valid';
    return true;

}

function validateEmail(){
    var email =document.getElementById("contact-email").value ;
    if(email.length==0){
        emailError.innerHTML =" Please enter your Email"
        return false;
    }

    if(!email.match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,})$/)){
        emailError.innerHTML=" Enter Valid Email Address";
        return false;
    }

    emailError.innerHTML='valid';
    return true;
}

function validateMessage(){
    var message =document.getElementById("contact-message").value ;
    var required = 30;
    var left = required-message.length;

    if(left>0){
        messageError.innerHTML= left + 'characters required';
        return false;

    }

    messageError.innerHTML = 'valid';
    return true;
    
}

function validateForm() {
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
      submitError.innerHTML = 'Please fill the form properly';
      return false;
    }

  }
  

