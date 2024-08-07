const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
const number = document.querySelector('#number');

form.addEventListener('submit',(e)=>{

    if(!validateInputs()){
        e.preventDefault();
    }
    else{
        alert("Form submitted successfully!")
    }
})

function validateInputs(){
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    const numberValue = number.value.trim();
    let success = true

    
    if(usernameVal===''){
        success=false;
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }

    if(emailVal===''){
        success = false;
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        success = false;
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }

    if(passwordVal === ''){
        success= false;
        setError(password,'Password is required')
    }
    else if(passwordVal.length<8){
        success = false;
        setError(password,'Password must be atleast 8 characters long')
    }
    else{
        setSuccess(password)
    }

    if(cpasswordVal === ''){
        success = false;
        setError(cpassword,'Confirm password is required')
    }
    else if(cpasswordVal!==passwordVal){
        success = false;
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }

    if(numberValue === '')
    {
        success = false;
        setError(number,'Enter your phone number')
    }
    else if(numberValue.length <10)
    {
        success = false;
        setError(number,'Please enter a 10 digit number')
    }
    else if(numberValue.length >10)
    {
        success = false;
        setError(number,'Please enter a valid phone number')
    }
    else{
        setSuccess(number)
    }

    return success;

}

function validuser()
{
    const usernameVal = username.value.trim()

    if(usernameVal===''){
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }
}

function validemail()
{
    const emailVal = email.value.trim();

    if(emailVal===''){
        
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }
}
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

