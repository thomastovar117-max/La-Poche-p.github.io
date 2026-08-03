function toggle(idInput,idIcon){

const input=document.getElementById(idInput);
const icon=document.getElementById(idIcon);

icon.addEventListener("click",()=>{

input.type=input.type==="password"
? "text"
: "password";

icon.classList.toggle("bi-eye");
icon.classList.toggle("bi-eye-slash");

});

}

toggle("password","togglePassword");
toggle("confirmPassword","toggleConfirm");